import { Keyboard } from 'dva'
import { toggle } from 'components/searchPanel'

const keyboard = new Keyboard(document.body)
const keybind = keyboard.keybind
keybind(({ keyMap, meta, ctrl }, catcher) => {
    catcher(keyMap['f'],{ meta },toggle)
})
function onHandlerReady({ newNote, saveNote, deleteNote }){
    keybind(({ keyMap, meta, ctrl }, catcher) => {
        catcher(keyMap['n'],{ meta, ctrl },newNote)
        catcher(keyMap['s'],{ meta }, saveNote)
        catcher(keyMap['backSpace'],{ meta, ctrl },deleteNote)
    })
}
export default onHandlerReady
