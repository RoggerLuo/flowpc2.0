import { startFromScratch } from './draft'

let newNoteAdded = false

export function deleteNote(){
    let content = this.state.editorState.getCurrentContent().getPlainText()
    if(content.length>20) {
        content = content.slice(0,20) + '...'
    }
    if(!confirm(`确定要删除当前文章吗?\n"${content}"`)) return 
    const { itemId } = this.state
    const callback = () => this.props.onDelete(itemId,(newNote)=>this.replace(newNote))
    this.props.dispatch({ type: 'editor/delete', itemId, callback })
}

export function saveNote(){
    const { itemId, editorState } = this.state
    const { onNew, onSave, dispatch, unsaved } = this.props
    const note = { itemId, content: editorState.getCurrentContent().getPlainText() }
    if (newNoteAdded) {
        newNoteAdded = false
        onNew && onNew(note)
    } else {
        onSave && onSave(note)
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