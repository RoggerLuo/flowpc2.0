import React from 'react'
import { connect } from 'dva'
import Note from './NoteContainer'

function Notes({ dispatch, currentIndex, callbacks, notes }){
    const params = { dispatch, currentIndex, onSelect: callbacks.onSelect }
    return (
        <div style={{width:'100%'}}>
            { notes.map((note,index) => <Note {...params} index={index} note={note} key={index}/>) }
        </div>
    )
}

function mapStateToProps(state) {
    return { 
        notes: state.list.notes,
        currentIndex: state.list.index
    }
}

export default connect(mapStateToProps)(Notes)
