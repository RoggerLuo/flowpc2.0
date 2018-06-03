import invariant from 'invariant'
export default {
    namespace: 'listSearch',
    state: {
        notes: [],
        index: 0,
    },
    reducers: {
        select(state,{ index }) {
            return { ...state, index }
        },

        modify(state,{ note }) {
            const notes = [...state.notes]
            notes.some(_note=>{
                if(_note.itemId == note.itemId) {
                    _note.content = note.content
                    return true
                }
            })
            return { ...state, notes }
        }
    },
    effects: {
        * fetchNotes({ cb }, { fetch, call, put }) {
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
                invariant(note.hasOwnProperty('itemId') && note.hasOwnProperty('content') && note.hasOwnProperty('wordList'), 'notes格式不对')
            }
            yield put({ type: 'fetch', notes })
            cb(notes)
        },
        * deleteNote({ id }, { fetch, call, put }) {
            yield call(fetch, `note/${id}`, { method: 'delete' })
        }
    },
    event: {
        onReady(dispatch) {}
    }
}
