import { startFromScratch, startFromText } from './draft' 
import invariant from 'invariant'
export default {
    namespace: 'editor',
    state: {
        editorState: startFromScratch(),
        unsaved: false
    },
    reducers: {
        onChange(state,{ editorState }){
            return { ...state, editorState }
        },
        read(state,{ note }){
            return { ...state, editorState: startFromText(note.content||' ') }
        },
        empty(state){
            return { ...state, editorState: startFromScratch() }
        }
    },
    event: {
        onReady(dispatch) {

        }
    }
}