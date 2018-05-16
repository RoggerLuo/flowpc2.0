import { startFromScratch, startFromText } from './draft'
import invariant from 'invariant'
export default {
    namespace: 'editor',
    state: {
        editorState: startFromScratch(),
        note: {},
        unsaved: false
    },
    reducers: {
        change(state, { key, value }) {
            let obj = {}
            obj[key] = value
            return { ...state, ...obj }
        },
        onChange(state, { editorState }) {
            return { ...state, editorState, unsaved: true }
        },
        read(state, { note }) {
            return { ...state, editorState: startFromText(note.content || ' '), note }
        },
        empty(state) {
            return { ...state, editorState: startFromScratch() }
        }
    },
    effects: {
        * saveNote({ itemId, content }, { fetch, call, put }) {
            const res = yield call(fetch, `note/${itemId}`, { method: 'post', body: { content } })
            if (res !== 'ok') {
                alert(`request error:${res}`)
                return
            }
            put({ type: 'editor/change', key: 'unsaved', value: false })
        }
    },
    event: {
        onReady(dispatch) {

        }
    }
}