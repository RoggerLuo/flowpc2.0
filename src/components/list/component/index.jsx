import React from 'react'
import dva from 'dva'
import { NoteContent, NoteWrapper } from './Note'

function Notes({ notes, index }){
    return (
        <div style={{width:'100%'}}>
            { notes.map((note,ind) => (
                <NoteWrapper key={ind}>
                    <NoteContent {...note}/>
                </NoteWrapper>
                )
            )}
        </div>
    )
}
function mapStateToProps(state) {
    return { 
        notes: state.list.notes,
        index: state.list.index
    }
}

export default dva.connect(mapStateToProps)(Notes)
