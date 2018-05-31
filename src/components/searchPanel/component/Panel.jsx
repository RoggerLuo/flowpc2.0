import React from 'react'
import { connect } from 'dva'
import SearchBar from './searchBar'
import dva, { Keyboard } from 'dva'

const keyboard = new Keyboard(document.getElementById('#search-input'))
const keybind = keyboard.keybind

function Panel({ text, visibility, dispatch, onSearchResult }) {
    if(!visibility) return null
    function search(){
        const callback = (wordList) => {
            onSearchResult(notes,wordList)            
        }
        dispatch({ type: 'searchPanel/search', callback })
    }
    const onChange = (e) => {
        dispatch({ type:'searchPanel/onChange', text: e.target.value })
    }
    const toggle = () => {
        dispatch({ type: 'searchPanel/toggle' })
    }
    return (
        <div style={{backgroundColor:'rgba(236, 236, 236, 0.9)',position:'fixed', top:'0',bottom:'0',left:'0',right:'0'}}>
            <div id="search-wrapper" style={{width:'50%',marginLeft:'25%',marginTop:'15%'}}>
                <SearchBar onChange={onChange} text={text} toggle={toggle}/>
            </div>
        </div>
    )
}
function mapStateToProps(state) {
    return { 
        visibility: state.searchPanel.visibility,
        text: state.searchPanel.text
    }
}

export default connect(mapStateToProps)(Panel)
