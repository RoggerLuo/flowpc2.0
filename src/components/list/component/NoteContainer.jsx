import React from 'react'
import { NoteContent, NoteWrapper } from './Note'

function Note({ dispatch, ...note }){
    const onSelect = () => {
        dispatch({type:'list/select',index:note.index,})
    }
    return (
        <NoteWrapper onSelect={onSelect}>
            <NoteContent {...note}/>
        </NoteWrapper>
    )
}

export default dva.connect()(Note)
