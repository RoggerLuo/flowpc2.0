import React from 'react'
import s from './style'
import './global.css'
import List, * as list from 'components/list'
import Editor from 'components/editor'
import SearchPanel, { toggle } from 'components/searchPanel'
import ListSearch, { rerender } from 'components/listSearch'
import dva, { Keyboard } from 'dva'

const keyboard = new Keyboard(document.body)
const keybind = keyboard.keybind

const onSearchResult = (wordList) => {
    const notes = list.getNotes()
    rerender(notes,wordList)
}
class App extends React.Component {
    constructor(props) {
        super(props)
        // register
        this.handlers = {}
        // this.editorActions = {}
        this.delivery = handlers => {
            this.handlers = { ...this.handlers, ...handlers }
        }
        //this.editorActions = actions
        // use
        keybind(({ keyMap, meta, ctrl }, catcher) => {
            catcher(keyMap['f'], { meta }, (e) => toggle())
            catcher(keyMap['n'], { meta, ctrl }, (e) => this.handlers.newNote())
            catcher(keyMap['s'], { meta }, (e) => this.handlers.saveNote())
            catcher(keyMap['backSpace'], { meta, ctrl }, (e) => this.handlers.deleteNote())
        })
        this.editorListeners = {
            onNew: list.addNote,
            onSave: list.modifyNote,
            onDelete: list.removeNote
        }
        this.onSelect = note => this.handlers.replace(note)
    }
    componentDidMount() {
        list.fetchData((notes) => {
            if (notes[0]) {
                this.handlers.replace(notes[0])
            }
        })
    }
    render() {
        return (
            <div style={{height:'100%',display:'flex',flexDirection:'column'}}>
                <div style={{flex:'1',display:'flex'}} >
                    <div style={{height:'100%',display:'flex',width:'50%'}}>
                        <div className={s.scrollbar} style={{width:'50%',height:'100%',overflowY:'scroll'}}>
                            <List onSelect={this.onSelect}/>
                        </div>
                        <div className={s.scrollbar} style={{width:'50%',height:'100%',overflowY:'scroll'}}>
                            <ListSearch />
                        </div>
                    </div>
                    <div style={{height:'100%',width:'50%'}}>
                        <Editor {...this.editorListeners} delivery={this.delivery}/>
                    </div>
                </div>
                <SearchPanel onSearchResult={onSearchResult}/>
            </div>
        )
    }
}
export default App

/*
<div style={{height:'40px',width:'100%'}}>
    <Header/>
</div>
*/
/*
// const bridge = {}
// this.bridge = bridge

// this.delivery = ({ replace, saveNote, newNote, deleteNote }) => {
//     bridge.replace = replace
//     bridge.saveNote = saveNote
//     bridge.deleteNote = deleteNote
//     bridge.newNote = newNote
// }
*/