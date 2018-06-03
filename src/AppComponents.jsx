import React from 'react'
import './global.css'
import AppView from './AppView'
import * as l from 'components/list'
import * as ls from 'components/listSearch'
const editCallbacks = {
    onNew: l.addNote,
    onSave: (note)=>{
        l.modifyNote(note)
        ls.modifyNote(note)
    },
    onDelete: l.removeNote
}
const onSearchResult = (wordList) => {
    const notes = l.getNotes()
    ls.rerender(notes,wordList)
}
export default function({ interfaces, deliver }){   
    const onSelect = (note)=>{interfaces.replace(note)}
    return (<AppView
        editCallbacks={editCallbacks}
        deliver={deliver}
        onSelect={onSelect}
        onSearchResult={onSearchResult} 
    />
    )
}
