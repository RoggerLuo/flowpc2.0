import React from 'react'
import s from './style'
import './global.css'
import List,{ initListData } from 'components/list'
import Editor from 'components/editor'
// initListData(())
export default function(){

    // 需要editor的this.setState
    // 还需要list的 onNotesRefresh
    onNotesRefresh(notes=>{
        setNote(notes[0])
    })
    const someOjbect = {
        some:'some'
    }
    function userScope(){
        return { some:'some'}
    }
    const bridgeObject = {}
    const select = (selectedNote) => {
        bridgeObject.replaceHandler(selectedNote)
    }
    const replace = (replaceHandler) => {
        bridgeObject.replaceHandler = replaceHandler
        // replaceHandler(userScope())
        // 通过作用得到一个
        // replaceHandler(note)
    }

    return (
        <div style={{height:'100%',display:'flex',flexDirection:'column'}}>
            <div style={{flex:'1',display:'flex'}} >
                
                <div style={{height:'100%',display:'flex',width:'50%'}}>
                    <div className={s.scrollbar} style={{width:'50%',height:'100%',overflowY:'auto'}}>
                        <List onSelect={select}/>
                    </div>
                    <div className={s.scrollbar} style={{width:'50%',height:'100%',overflowY:'auto'}}>
                        <List/>
                    </div>
                </div>
                
                <div style={{height:'100%',width:'50%'}}>
                    <Editor switch={replace}/>
                </div>

            </div>
        </div>
    )
}
// 
/*
<div style={{height:'40px',width:'100%'}}>
</div>

<Header/>
<SearchPanel/>
*/