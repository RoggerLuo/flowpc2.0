import React from 'react'
import s from './style'
export default function(){
    return (
        <div style={{height:'100%',display:'flex',flexDirection:'column'}}>
            <div style={{height:'40px',width:'100%'}}>
                <Header/>
            </div>
            <div style={{flex:'1',display:'flex'}} >
                <div>
                    <NoteList/>
                </div>
                <div>
                    <NoteList/>
                </div>
                <div style={{height:'100%'}}>
                    <Editor/>
                </div>
            </div>
            <SearchPanel/>
        </div>
    )
}

