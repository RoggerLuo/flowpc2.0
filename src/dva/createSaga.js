import createSagaMiddleware from 'redux-saga'
import { put, takeEvery, call } from 'redux-saga/effects'

export default function createSaga(key,cb) {
    // console.log(typeof(cb))
    const saga = function*(action) {
        // console.log('createSaga',action)

        const effectsHelper = { put, call }
        yield cb(action, effectsHelper)
    }
    // function* saga() {
    //     yield delay(1000)
    //     yield put({type:'server/change',key:'content',value:'sagaTestFinal'})
    // }

    return function*() {
        yield takeEvery(key,saga)
    }
}