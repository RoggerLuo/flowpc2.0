import React from 'react'
import { connect } from 'dva'
import SearchInput from './SearchInput'
import PanelView from './PanelView'

function process(){
    middle return inject
}
function Panel({ text, visibility, dispatch, onSearchResult }) {
    if(!visibility) return null
    
    const onChange = (e) => dispatch({ type:'searchPanel/onChange', text: e.target.value })
    const toggle = () => dispatch({ type: 'searchPanel/toggle' })
    const search = (queryStr) => dispatch({ type: 'searchPanel/search', queryStr, onSearchResult })

    this.handlers = {}
    this.delivery = handlers => {
        this.handlers = { ...this.handlers, ...handlers }
        this.handlers.keybind(function({ keyMap, meta, ctrl },catcher){
            catcher(keyMap['enter'],{},(e)=>{
                search(text)
                toggle()
            })
        })
    }
    
    return (
        <PanelView>
            <SearchInput delivery={this.delivery} onChange={onChange} text={text}/>
        </PanelView>
    )
}

function mapStateToProps(state) {
    return { 
        visibility: state.searchPanel.visibility,
        text: state.searchPanel.text
    }
}

export default connect(mapStateToProps)(Panel)
