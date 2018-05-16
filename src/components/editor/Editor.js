import React from 'react'
import dva from 'dva'
import { Editor } from 'draft-js'
import { myKeyBindingFn, handleKeyCommand } from './keyCommand'
import img from './bg.png'

class MyEditor extends React.Component {
    constructor(props) {
        super(props)
        this.handleKeyCommand = handleKeyCommand.bind(this)
        this.setDomEditorRef = ref => this.domEditor = ref
    }
    onChange(editorState) {
        this.props.dispatch({ type: 'editor/onChange', editorState })
    }
    focus(){
        this.domEditor.focus()
    }
    render(){
        return (
            <div style={{fontSize:'17px',height:'100%',cursor:'text',padding:'10px'}} onClick={this.focus.bind(this)}>
                <Editor 
                    editorState={this.props.editorState} 
                    onChange={this.onChange.bind(this)} 
                    handleKeyCommand={this.handleKeyCommand}
                    keyBindingFn={myKeyBindingFn}
                    ref={this.setDomEditorRef} 
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const editorState = state.editor.editorState
    const note = state.editor.note
    return { editorState, note }
}

export default dva.connect(mapStateToProps)(MyEditor)
