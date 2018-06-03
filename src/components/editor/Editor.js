import React from 'react'
import { connect } from 'dva'
import { Editor } from 'draft-js'
import { myKeyBindingFn, handleKeyCommand } from './keyCommand'
import moveSelectionToEnd from './moveSelectionToEnd'
import { saveNote, newNote, deleteNote } from './keyActions'
import { startFromScratch, startFromText } from './draft'
import img from './bg.png'

class MyEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = { editorState: startFromScratch(), itemId: 0 }
        // bind
        this.handleKeyCommand = handleKeyCommand.bind(this)
        this.saveNote = saveNote.bind(this)
        this.deleteNote = deleteNote.bind(this)
        this.newNote = newNote.bind(this)
        this.buildExternalInterface.bind(this)
        // 
        this.setDomEditorRef = ref => this.domEditor = ref
        this.oldText = '' //为了能够区分是 光标change 还是 内容change
        this.buildExternalInterface()
    }
    buildExternalInterface(){
        this.replace = (note) => {
            const editorState = startFromText(note.content)
            this.oldText = editorState.getCurrentContent().getPlainText()
            this.setState({ editorState, itemId: note.itemId })
        }
        this.props.delivery({ 
            replace: this.replace, 
            saveNote: this.saveNote,
            deleteNote: this.deleteNote,
            newNote: this.newNote
        })
    }
    onChange(editorState) {
        const newText = editorState.getCurrentContent().getPlainText()
        this.setState({ editorState },()=>{
            if(newText !== this.oldText){
                // this.props.changeListener && this.props.changeListener(newText)
                this.props.dispatch({ type: 'editor/onChange' })
                this.oldText = newText
            }
        })
    }
    focus(){
        if(document.activeElement.contentEditable != 'true') {
            this.setState({ editorState: moveSelectionToEnd(this.state.editorState) },()=>{
                this.domEditor.focus()
            })            
        }
    }
    render(){
        let style = { fontSize:'17px', cursor:'text', height:'100%',lineHeight: '1.75', overflow: 'auto' }
        if(this.props.unsaved){
            style = { ...style, backgroundImage: `url(${img})` }            
        }
        return (
            <div style={ style } onClick={this.focus.bind(this)}>
                <div style={{ padding: '10px' }}>
                    <Editor 
                        editorState={this.state.editorState} 
                        onChange={this.onChange.bind(this)} 
                        handleKeyCommand={this.handleKeyCommand}
                        keyBindingFn={myKeyBindingFn}
                        ref={this.setDomEditorRef} 
                    />
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { 
        unsaved: state.editor.unsaved
    }
}

export default connect(mapStateToProps)(MyEditor)
