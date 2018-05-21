import dva from 'dva'
import model from './model'
import component from './component'
dva.model(model)
export default component
export function initListData(cb) {
    dva._store.dispatch({ type: 'list/fetchNotes', cb })
}
export function listAdd(note) {
    dva._store.dispatch({ type: 'list/add', note })
}
export function listModify(note) {
    dva._store.dispatch({ type: 'list/modify', note })
}