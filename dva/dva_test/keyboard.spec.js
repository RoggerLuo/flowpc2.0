import _test from 'tape'
import keyboard, { onkeydown } from '../keyboard'
dva.test('keyboard module api', (t) => {
    t('feed it with a function', () => {
        keyboard(function() {
            console.log('feed it with a function')
        })
        return true
    })
    t('it provides first arg with 4 var to this function', () => {
        keyboard(function({ keyMap, meta, ctrl, shift }) {
            console.log('keyMap')
            console.log(keyMap)
            console.log('meta', meta)
            console.log('ctrl', ctrl)
            console.log('shift', shift)
        })
        return true
    })
    t('function should call the second arg', () => {
        keyboard(
            function({ keyMap, meta, ctrl, shift }, catcher) {
                catcher(83, { ctrl: true }, () => { console.log('fake catcher callback') })
                catcher('83', { ctrl: true }, () => { console.log('fake catcher callback string') })
            }
        )
        return true
    })
    t('result display', () => {
        onkeydown({ ctrlKey: true, metaKey: false, keyCode: 83, shiftKey: false, preventDefault(){}, stopPropagation(){} })
        return true
    })
})