import { put, takeEvery, call } from 'redux-saga/effects'
// import fetch from './fetch'
import invariant from 'invariant'

export default (sagaMiddleware,namespace,injector) => (key, cb) => {
    invariant(typeof(key) === 'string', `the first arg of saga should be string`)
    invariant(typeof(cb) === 'function', `the second arg of saga should be function`)
    sagaMiddleware.run(createSaga())

    function createSaga() {
        function prefixed_put(action) {
            action.type = `${namespace}/${action.type}`
            return put(action)
        }
        function* saga(action) {
            const paramsInjected = injector({ put: prefixed_put, call }) //fetch
            yield cb(action,paramsInjected)
        }
        return function*() {
            yield takeEvery(`${namespace}/${key}`,saga)
        }
    }
}

