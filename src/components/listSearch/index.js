import { Model } from 'dva'
import model from './model'
import component from './component'
import rerender from './rerender'
// dva.model(model)
Model.create(model)
export default component
export { rerender }
// export function fetchData(cb) {
//     dva._store.dispatch({ type: 'list/fetchNotes', cb })
// }
// export function addNote(note) {
//     dva._store.dispatch({ type: 'list/add', note })
// }
// export function modifyNote(note) {
//     dva._store.dispatch({ type: 'list/modify', note })
// }
// export function removeNote(itemId,callback) {
//     dva._store.dispatch({ type: 'list/remove', itemId, callback })
// }