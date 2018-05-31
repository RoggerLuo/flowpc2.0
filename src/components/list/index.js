import dva,{ Model } from 'dva'
import model from './model'
import component from './component'
Model.create(model)
export default component
export function fetchData(cb) {
    dva._store.dispatch({ type: 'list/fetchNotes', cb })
}
export function addNote(note) {
    dva._store.dispatch({ type: 'list/add', note })
}
export function modifyNote(note) {
    dva._store.dispatch({ type: 'list/modify', note })
}
export function removeNote(itemId,callback) {
    dva._store.dispatch({ type: 'list/remove', itemId, callback })
}
export function getNotes(itemId,callback) {
    return [...Model.get('list').notes]
}