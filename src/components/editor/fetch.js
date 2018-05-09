import dva from 'dva'


function*() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}

dva.saga(({ put, takeEvery }) => {
    function* incrementAsync() {
        yield delay(1000)
        yield put({ type: 'INCREMENT' })
    }
    return function*() {
        yield takeEvery('INCREMENT_ASYNC', incrementAsync)
    }
})
export const get = () => dva.fetch('notes')
export const del = (id) => dva.fetch(`note/${id}`, { method: 'delete' })
export const pos = (id, content) => dva.fetch(`note/${id}`, { method: 'POST', body: { content } })

//export const getNotes = () =>



(cb) => {
    const saga = cb()
    return function*() {
        yield takeEvery('INCREMENT_ASYNC', saga)
    }
}
dva.saga(
    return function*(){
        yield delay(1000)
        yield put({ type: 'INCREMENT' })
    }
)