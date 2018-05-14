import { Editor, EditorState, ContentState } from 'draft-js'
import decorator from './decorator'

export function startFromText(){
    const cs = ContentState.createFromText('#text\n##asdfasd\n###asdfasdf')
    return EditorState.createWithContent(cs,decorator)
}

export const startFromScratch = () => EditorState.createEmpty(decorator)
