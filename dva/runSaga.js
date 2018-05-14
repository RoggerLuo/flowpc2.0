import { put, takeEvery, call } from 'redux-saga/effects'
import fetch from './fetch'
import invariant from 'invariant'

export default (sagaMiddleware) => (key, cb) => {
    invariant(typeof(key) === 'string', `the first arg of saga should be string`)
    invariant(typeof(cb) === 'function', `the second arg of saga should be function`)
    sagaMiddleware.run(createSaga(key, cb))
}

function createSaga(key,cb) {
    function* saga(action) {
        yield cb(action, { put, call, fetch })
    }
    return function*() {
        yield takeEvery(`saga/${key}`,saga)
    }
}