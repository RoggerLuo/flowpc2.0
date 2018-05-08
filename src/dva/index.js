import "babel-polyfill"
import fetch from './fetch'
import handleModel from './handleModel'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import invariant from 'invariant'

let startedFlag = false
const app = {
    _models: [],
    _store: null,
    model: null,
    saga: null,
    fetch,
    start
}
start(app)
export default app
// function(){
//     if(startedFlag){
//         return app        
//     }
//     start(app)
//     return app
// }

function start(app) {
    startedFlag = true
    const reducers = {}
    const sagaMiddleware = createSagaMiddleware()
    app._store = createStore(a => a, applyMiddleware(sagaMiddleware))
    app.model = function(m) {
        invariant(
            Object.keys(reducers).every(key => key !== m.namespace),
            `reducer name:[${m.namespace}] is conflict with other reducers`
        )
        reducers[m.namespace] = handleModel(m)
        app._store.replaceReducer(combineReducers({ ...reducers }))
        m.event && m.event.onReady && m.event.onReady(app._store.dispatch)
    }
    app.saga = function(effect) {
        sagaMiddleware.run(effect)
    }
}
