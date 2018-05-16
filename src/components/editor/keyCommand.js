import { getDefaultKeyBinding, KeyBindingUtil } from 'draft-js'
const { hasCommandModifier } = KeyBindingUtil

export function handleKeyCommand(command) {
    if (command === 'myeditor-save') {
        // set a new `editorState`, etc.
        const contentState = this.props.editorState.getCurrentContent()
        const text = contentState.getPlainText()
        this.props.dispatch({ type: 'saga/saveNote', content: text, itemId: this.props.note.itemId })
        return 'handled'
    }
    return 'not-handled'
}

export function myKeyBindingFn(e) {
    if (e.keyCode === 83 /* `S` key */ && hasCommandModifier(e)) {
        return 'myeditor-save'
    }
    return getDefaultKeyBinding(e)
}