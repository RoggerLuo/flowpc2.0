export default {
    * fetchNotes(action, { fetch, call, put }) {
        const notes = yield call(fetch, `notes`)
        yield put({ type: 'list/fetch', notes })
    },
    * deleteNote({ id }, { call, put }) {
        yield call(fetch, `note/${id}`, { method: 'delete' })
    },
    * postNote({ id, content }, { call, put }) {
        yield call(fetch, `note/${id}`, { method: 'post', body: { content } })
    }
}
// listSub