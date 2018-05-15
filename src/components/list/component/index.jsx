import React from 'react'
import dva from 'dva'
import Note from './Note'
function Notes({ notes, index }){
    return (
        <div style={{width:'100%'}}>
            { notes.map((note,index) => <Note {index,...note} key={index}/>) }
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
