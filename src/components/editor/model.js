import { startFromScratch, startFromText } from './draft'
import invariant from 'invariant'
// import moveSelectionToEnd from './moveSelectionToEnd'
/*
    1新建之后留了一个字母
    2新建之后无法保存
*/
export default {
    namespace: 'editor',
    state: {
        unsaved: false
    },
    reducers: {
        change(state, { key, value }) {
            let obj = {}
            obj[key] = value
            return { ...state, ...obj }
        },
        onChange(state,action) {
            return { ...state, unsaved: true }
        }
    },
    effects: {
        * save({ unsaved, editorState, itemId }, { fetch, call, put }) {
            invariant(!!itemId,'itemId没有传入')
            if (unsaved) {
                const contentState = editorState.getCurrentContent()
                const text = contentState.getPlainText()
                yield put({ type: 'postServer', content: text, itemId })
            }
        },
        * postServer({ itemId, content }, { fetch, call, put }) {
            // 不直接调用，由save调用
            yield put({ type: 'change', key: 'unsaved', value: false })
            const res = yield call(fetch, `note/${itemId}`, { method: 'post', body: { content } })
            if (res !== 'ok') {
                alert(`request error:${res}`)
                yield put({ type: 'change', key: 'unsaved', value: true })
                return
            }
        }
    },
    event: {
        onReady(dispatch) {

        }
    }
}

// * new({ state }, { fetch, call, put }) {
//     yield put({ type: 'save', ...state })
//     const itemId = Date.parse(new Date())
//     yield put({ type: 'startFromEmpty', note: { itemId } })
// },

// read(state, { note }) {
//     return { ...state, editorState: startFromText(note.content || ''), note }
// },
// startFromEmpty(state,{ note }) {
//     return { ...state, editorState: startFromScratch(), note }
// }
