import invariant from 'invariant'

export default {
    * fetchNotes(action, { fetch, call, put }) {
        const rawNotes = yield call(fetch, `notes`)
        const notes = rawNotes.map(entry => {
            const itemId = entry[1]
            const content = entry[2]
            const wordList = entry[3]
            const modifiedTime = entry[4]
            return { itemId, content, wordList, modifiedTime }
        })
        if (notes.length > 0) {
            const note = notes[0]
            invariant(note.hasOwnProperty('itemId'), 'notes格式不对')
            invariant(note.hasOwnProperty('content'), 'notes格式不对')
            invariant(note.hasOwnProperty('wordList'), 'notes格式不对')
        }
        yield put({ type: 'list/fetch', notes })
    },
    * deleteNote({ id }, { fetch, call, put }) {
        yield call(fetch, `note/${id}`, { method: 'delete' })
    }
}
// listSub