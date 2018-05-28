import "babel-polyfill"
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { connect } from 'react-redux'
import keyboard from './Keyboard'
import modelMethod from './Model'
import constantMethod from './Constant'

const app = {
    _store: null,
    _constants: {},
    _model: {}    
}

const sagaMiddleware = createSagaMiddleware()
app._store = createStore(a => a,applyMiddleware(sagaMiddleware))
app._model.sagaMiddleware = sagaMiddleware

export const connect
export const Model = modelMethod(app)
export const Keyboard = keyboard
export const Constant = constantMethod(app)
export default app

// const reducers = {}
// Model.create = injectModel(sagaMiddleware,reducers,app._store)
// app.model = Model.create

// export Model

// start(app)
// function start(app) {
// }

// export const Model
// import config from '../dva.config'
// app.model = injectModel(sagaMiddleware,reducers,app._store)
// app.constant = function(obj) {
//     invariant(typeof(obj) === 'object', `dva.constant method expect an object `)
//     Object.keys(obj).forEach(key => {
//         const reservedKeys = ['_models', '_store', 'model', 'saga', 'connect']
//         invariant(reservedKeys.indexOf(key) === -1, `constant name conficted with dva reserved key`)
//         app[key] = obj[key]
//     })
// }
// app.constant(config)