import React from 'react'
import s from './style'
export default function({ list, listSearch, editor, searchPanel }) {
    return (
        <div style={{height:'100%',display:'flex',flexDirection:'column'}}>
            <div style={{flex:'1',display:'flex'}} >
                <div style={{height:'100%',display:'flex',width:'50%'}}>
                    <div className={s.scrollbar} style={{width:'50%',height:'100%',overflowY:'scroll'}}>
                        {list}
                    </div>
                    <div className={s.scrollbar} style={{width:'50%',height:'100%',overflowY:'scroll'}}>
                        {listSearch}
                    </div>
                </div>
                <div style={{height:'100%',width:'50%'}}>
                     {editor}
                </div>
            </div>
            {searchPanel}
        </div>
    )
}
