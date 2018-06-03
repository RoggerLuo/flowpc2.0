import React from 'react'
import onHandlerReady from './keyboard'
import { fetchData } from 'components/list'
import AppComponents from './AppComponents'
import { Deliver } from 'dva'
import keyboard from './keyboard'
const interfaces = {}
keyboard(interfaces)
class App extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        fetchData((notes) => {
            if (notes[0]) interfaces.replace(notes[0])                
        })        
    }
    render() {
        return (
            <AppComponents interfaces={interfaces} deliver={ Deliver(interfaces) }/>
        )
    }
}
export default App
