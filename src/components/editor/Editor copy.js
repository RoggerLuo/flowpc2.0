import React from 'react'
import dva from 'dva'
import { Editor } from 'draft-js'
import { myKeyBindingFn, handleKeyCommand } from './keyCommand'
import img from './bg.png'
import moveSelectionToEnd from './moveSelectionToEnd'
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
        /*
            每次focus光标都会跑到最前

            每次new的时候，在光标还在focus的时候直接替换editorState会出问题, 光标位置会混乱
        */
        this.domEditor.focus()
        // this.props.dispatch({ type: 'editor/onChange', editorState: this.props.editorState })
    }
    render(){
        let style = {fontSize:'17px',height:'100%',cursor:'text',padding:'10px'}
        if(this.props.unsaved){
            style = { ...style, backgroundImage:`url(${img})` }            
        }
        return (
            <div style={style} onClick={this.focus.bind(this)}>
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
    return { ...state.editor }
}

export default dva.connect(mapStateToProps)(MyEditor)
