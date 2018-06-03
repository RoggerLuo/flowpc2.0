import React from 'react'
import s from './style'
import List from 'components/list'
import ListSearch from 'components/listSearch'
import Editor from 'components/editor'
import SearchPanel from 'components/searchPanel'

export default function({ onSearch, onSelect, deliver, editCallbacks }) {
    return (
        <div style={{height:'100%',display:'flex',flexDirection:'column'}}>
            <div style={{flex:'1',display:'flex'}} >
                <div style={{height:'100%',display:'flex',width:'50%'}}>
                    <div className={s.scrollbar} style={{width:'50%',height:'100%',overflowY:'scroll'}}>
                        <List onSelect={onSelect}/>
                    </div>
                    <div className={s.scrollbar} style={{width:'50%',height:'100%',overflowY:'scroll'}}>
                    </div>
                </div>
                <div style={{height:'100%',width:'50%'}}>
                     <Editor {...editCallbacks} deliver={deliver}/>
                </div>
            </div>
        </div>
    )
}
//                       <ListSearch onSelect={onSelect}/>
//             <SearchPanel onSearch={onSearch}/>
