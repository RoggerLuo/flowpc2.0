## keyboard使用示范
```
import { Keyboard } from 'dva'

k = new Keyboard(document.body)

k.keybind(({keyMap,meta,ctrl},catcher)=>{
    catcher(keyMap['n'],{meta,ctrl},(e)=>this.newNote())
    catcher(keyMap['s'],{meta},(e)=>this.saveNote())
    catcher(keyMap['backSpace'],{meta,ctrl},(e)=>this.deleteNote())
})
```