import React from 'react'
export default function({ children }) {
    return (
        <div style={{backgroundColor:'rgba(236, 236, 236, 0.9)',position:'fixed', top:'0',bottom:'0',left:'0',right:'0'}}>
            <div id="search-wrapper" style={{width:'50%',marginLeft:'25%',marginTop:'15%'}}>
                { children }
            </div>
        </div>
    )
}