import React from 'react'
import s from './style'
import dva from 'dva'
import model from './model'
import sagas from './sagas'
import './global.css'
import List from 'components/list'
import Editor from 'components/editor'
dva.model(model)
dva.saga(sagas)
export default function(){
    return (
        <div style={{height:'100%',display:'flex',flexDirection:'column'}}>
            <div style={{flex:'1',display:'flex'}} >
                

                <div style={{height:'100%',display:'flex',width:'50%'}}>
                    <div className={s.scrollbar} style={{width:'50%',height:'100%',overflowY:'auto'}}>
                        <List/>
                    </div>
                    <div className={s.scrollbar} style={{width:'50%',height:'100%',overflowY:'auto'}}>
                        <List/>
                    </div>

                </div>
                

                <div style={{height:'100%',width:'50%'}}>
                    <Editor/>
                </div>



            </div>
        </div>
    )
}
// 
/*
<div style={{height:'40px',width:'100%'}}>
</div>

<Header/>
<SearchPanel/>
*/