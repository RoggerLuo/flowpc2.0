import React from 'react'
import './global.css'
import AppView from './AppView'
import Editor from 'components/editor'
import List, * as l from 'components/list'
import ListSearch, * as ls from 'components/listSearch'
import SearchPanel from 'components/searchPanel'
const editEvents = {
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

export default function({ handlers, delivery }){   
    const components = {
            list: (<List callbacks={handlers}/>),
            listSearch: (<ListSearch callbacks={handlers}/>),
            editor: (<Editor {...editEvents} delivery={delivery}/>),
            searchPanel: (<SearchPanel onSearchResult={onSearchResult}/>)
    }
    return (<AppView {...components}/>)
}
