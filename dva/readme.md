## deliver interface
```javascript
const interfaces = {}
const deliver = _goods => {
    Object.keys(_goods).forEach(key=>{
		interfaces[key] = _goods[key]
    })
    // rename
	 // interfaces.onSelect = interfaces.replace
    // onHandlerReady 或者不要这个
    // onHandlerReady(interfaces)
}
```
## keyboard使用示范
```javascript
import { Keyboard } from 'dva'

k = new Keyboard(document.body)
k.keybind(({keyMap,meta,ctrl},catcher)=>{
    catcher(keyMap['n'],{meta,ctrl},(e)=>this.newNote())
    catcher(keyMap['s'],{meta},(e)=>this.saveNote())
    catcher(keyMap['backSpace'],{meta,ctrl},(e)=>this.deleteNote())
})
```