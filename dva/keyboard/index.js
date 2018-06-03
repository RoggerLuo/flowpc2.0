import { keyMap, meta, ctrl, shift } from './config'
import eventCatcher from './eventCatcher'
import invariant from 'invariant'

const bindArr = []
export const onkeydown = function(event) {
    const catcher = eventCatcher(event) // catcher接受一个event来生成事件捕捉器, 每次需要更新catcher
    bindArr.forEach(({ keyCode, modifierKey, callback }) => {
        catcher(keyCode,modifierKey,callback)
    })
}
if(process.env.NODE_ENV!='test') {
    document.body.onkeydown = onkeydown  
} 
export default function(cb) {
    const fakeCatcher = (keyCode, modifierKey, callback) => {
        keyCode = parseInt(keyCode)
        invariant(typeof(keyCode) == "number", 'arg 1 should be a number')
        invariant(typeof(modifierKey) == 'object', 'arg 2 should be a object')
        invariant(typeof(callback) == 'function', 'arg 3 should be a function')
        bindArr.push({ keyCode, modifierKey, callback })
    }
    invariant(typeof(cb) == 'function', 'keybind should be a function')
    cb({ keyMap, meta, ctrl, shift }, fakeCatcher)
}

