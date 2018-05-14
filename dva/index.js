import "babel-polyfill"
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { connect } from 'react-redux'
import invariant from 'invariant'
import injectModel from './injectModel'
import runSaga from './runSaga'
import config from '../dva.config'
const app = {
    _models: [],
    _store: null,
    model: null,
    saga: null,
    connect
}
start(app)
export default app

function start(app) {
    const reducers = {}
    const sagaMiddleware = createSagaMiddleware()
    const runSingleSaga = runSaga(sagaMiddleware)
    app._store = createStore(a => a, applyMiddleware(sagaMiddleware))
    app.model = function(m) {
        invariant(
            Object.keys(reducers).every(key => key !== m.namespace),
            `reducer name:[${m.namespace}] is conflict with other reducers`
        )
        reducers[m.namespace] = injectModel(m)
        app._store.replaceReducer(combineReducers({ ...reducers }))
        m.event && m.event.onReady && m.event.onReady(app._store.dispatch)
    }
    app.saga = function(...args) {
        invariant(args.length !== 0, `saga's arg is empty`)
        if (args.length === 1) {
            invariant(typeof(args[0]) === 'object', `the only arg of saga should be an object`)
            Object.keys(args[0]).forEach(key => {
                runSingleSaga(key, args[0][key])
            })
        }
        if (args.length === 2) {
            const [key, cb] = args
            runSingleSaga(key, cb)
        }
    }
    app.constant = function(obj) {
        invariant(typeof(obj) === 'object', `dva.constant method expect an object `)
        Object.keys(obj).forEach(key => {
            const reservedKeys = ['_models', '_store', 'model', 'saga', 'connect']
            invariant(reservedKeys.indexOf(key) === -1, `constant name conficted with dva reserved key`)
            app[key] = obj[key]
        })
    }
    app.constant(config)
}