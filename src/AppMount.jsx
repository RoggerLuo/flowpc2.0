import React from 'react'
import onHandlerReady from './keyboard'
import { fetchData } from 'components/list'
import AppComponents from './AppComponents'
const handlers = {onSelect(){}}
const delivery = _handlers => {
    Object.keys(_handlers).forEach(key=>{
        handlers[key] = _handlers[key]
    })
    handlers.onSelect = handlers.replace
    
    onHandlerReady(handlers)
}
class App extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        fetchData((notes) => {
            if (notes[0]) handlers.replace(notes[0])                
        })        
    }
    render() {
        return (
            <AppComponents handlers={handlers} delivery={delivery}/>
        )
    }
}
export default App
