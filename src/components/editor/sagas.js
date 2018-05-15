import { delay } from 'redux-saga'

export default {
    * fetchNotes(action, { fetch, call, put }) {
        // const notes = yield call(fetch, `notes`)
        yield delay(1000)

        yield put({ type: 'list/fetch', notes:[{test:'asd'}] })
    },
    * postNote({ id, content }, { fetch, call, put }) {
        yield call(fetch, `note/${id}`, { method: 'post', body: { content } })
    }
}
// listSub
