import React from 'react'
import dva from 'dva'
import { Editor } from 'draft-js'
import { startFromScratch } from './draft'
import model from './model'

dva.model(model)

class MyEditor extends React.Component {
    constructor(props) {
        super(props)
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
            <div style={{height:'100%',cursor:'text'}} onClick={this.focus.bind(this)}>
                <Editor editorState={this.props.editorState} onChange={this.onChange.bind(this)} ref={this.setDomEditorRef} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const editorState = state.editor.editorState
    return { editorState }
}

export default dva.connect(mapStateToProps)(MyEditor)

function getText(editorState) {
    const contentState = editorState.getCurrentContent()
    const content = contentState.getPlainText()
    dispatch({type:'localData/modify_note_content',content})        
}


