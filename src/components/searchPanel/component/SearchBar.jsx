import React from 'react'
import { Keyboard } from 'dva'


class Search extends React.Component { 
    constructor(props) {
        super(props)
        this.setRef = ref => this.input = ref
    }
    componentDidMount() {
        const keyboard = new Keyboard(this.input)
        const keybind = keyboard.keybind
        keybind(({ keyMap, meta, ctrl }, catcher) => {
            catcher(keyMap['enter'], {}, (e) => {
                this.props.toggle()    
            })
        })
    }
    render(){
        return (
            <input 
                placeholder="Search..." 
                style={{fontSize:'16px'}}
                onChange={this.props.onChange}
                value={this.props.text}
                autosize="true"
                ref={this.setRef} 
            />
        )
    }
}
export default Search
