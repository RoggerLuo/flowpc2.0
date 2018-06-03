import React from 'react'
import s from './style'
import './global.css'
import List,{ initListData, listAdd, listModify, listRemove } from 'components/list'
import Editor from 'components/editor'
class App extends React.Component {
    constructor(props) {
        super(props)
        const bridge = { replacer(){} }
        this.onSelect = (selectedNote) => {
            bridge.replacer(selectedNote)
        }
        this.replaceHandler = (replacer) => {
            bridge.replacer = replacer
        }
        this.bridge = bridge
        this.onNewNote = listAdd
        this.onSaveNote = listModify
        this.onDelete = listRemove
    }
    componentDidMount(){
        initListData((notes)=>{
            if (notes[0]) {
                this.bridge.replacer(notes[0])
            }
        })
    }
    render(){
        return (
            <div style={{height:'100%',display:'flex',flexDirection:'column'}}>
                <div style={{flex:'1',display:'flex'}} >
                    <div style={{height:'100%',display:'flex',width:'50%'}}>
                        <div className={s.scrollbar} style={{width:'50%',height:'100%',overflowY:'scroll'}}>
                            <List onSelect={this.onSelect}/>
                        </div>
                        <div className={s.scrollbar} style={{width:'50%',height:'100%',overflowY:'scroll'}}>
                            <List/>
                        </div>
                    </div>
                    <div style={{height:'100%',width:'50%'}}>
                        <Editor 
                            replaceHandler={this.replaceHandler} 
                            onNewNote={this.onNewNote} 
                            onSaveNote={this.onSaveNote}
                            onDelete={this.onDelete}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default App
    
// 
/*
<div style={{height:'40px',width:'100%'}}>
</div>

<Header/>
<SearchPanel/>
*/