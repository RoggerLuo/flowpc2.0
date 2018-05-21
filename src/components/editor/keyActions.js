import { startFromScratch } from './draft'
let newNoteAdded = false

export function saveNote(){
    const { itemId, editorState } = this.state
    const { onNewNote, onSaveNote, dispatch, unsaved } = this.props
    const note = { itemId, content: editorState.getCurrentContent().getPlainText() }
    if (newNoteAdded) {
        newNoteAdded = false
        onNewNote && onNewNote(note)
    } else {
        onSaveNote && onSaveNote(note)
    }
    dispatch({ type: 'editor/save', unsaved, ...this.state })
}

export function newNote(){
    saveNote = saveNote.bind(this)
    saveNote()
    this.domEditor.blur()
    const itemId = Date.parse(new Date()) / 1000
    this.setState({ editorState: startFromScratch(), itemId }, () => {
        this.domEditor.focus()
        newNoteAdded = true
    })
}