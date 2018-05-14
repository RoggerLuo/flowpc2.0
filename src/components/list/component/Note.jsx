import React from 'react'

export function NoteContent({ itemId, content }){
    return (
        <div 
          style={{fontSize:'17px',lineHeight:'1.5',minHeight:'50px',padding:'15px 10px 15px 10px'}} 
        >
            <div>{content}</div>
        </div>
    )
}
//          onClick={click}

export function NoteWrapper({ selected, children }){
    let style = { cursor:'pointer', borderRight: '0.5px solid #ccc' }
    let _class = ""
    
    if(selected){
        style = { borderRight: '0.5px solid #ccc', backgroundColor: '#ececec' } 
        _class = "selectedNote"
    }
    return (
      <div style={style} className={_class}>
          {children}
          <div style={{widht:'100%',height:'1px',borderTop:'0.5px solid #ccc'}}></div>
      </div>
    )
}

// export default Note