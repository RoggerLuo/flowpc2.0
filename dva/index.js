import "babel-polyfill"
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { connect } from 'react-redux'
import invariant from 'invariant'
import injectModel from './injectModel'
import keyboard from './keyboard'
import config from '../dva.config'
const app = {
    _models: [],
    _store: null,
    model: null,
    connect
}
start(app)
export default app
export const Keyboard = keyboard

function start(app) {
    const reducers = {}
    const sagaMiddleware = createSagaMiddleware()
    app._store = createStore(a => a,applyMiddleware(sagaMiddleware))
    app.model = injectModel(sagaMiddleware,reducers,app._store)
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