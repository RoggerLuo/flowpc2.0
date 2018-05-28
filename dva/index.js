import "babel-polyfill"
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { connect } from 'react-redux'
import invariant from 'invariant'
import injectModel from './injectModel'
import keyboard from './keyboard'
import modelMethod from './Model'
import constantMethod from './Constant'

const app = {
    _models: [],
    _store: null,
    _constants: {},
    model: null,
    connect
}
const reducers = {}
const sagaMiddleware = createSagaMiddleware()
app._store = createStore(a => a,applyMiddleware(sagaMiddleware))

export const Model = modelMethod(app)
Model.createModel = injectModel(sagaMiddleware,reducers,app._store)
app.model = Model.createModel

export const Keyboard = keyboard
export const Constant = constantMethod(app)
export default app


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