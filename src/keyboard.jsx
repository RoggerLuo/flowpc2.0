import { Keyboard } from 'dva'
import { toggle } from 'components/searchPanel'

const keyboard = new Keyboard(document.body)
const keybind = keyboard.keybind

keybind(({ keyMap, meta, ctrl }, catcher) => {
    catcher(keyMap['f'],{ meta },toggle)
})

function bind(interfaces){ 
    keybind(({ keyMap, meta, ctrl }, catcher) => {
        catcher(keyMap['n'],{ meta, ctrl },()=>interfaces.newNote())
        catcher(keyMap['s'],{ meta },()=>interfaces.saveNote())
        catcher(keyMap['backSpace'],{ meta, ctrl },()=>interfaces.deleteNote())
    })
}

export default bind
