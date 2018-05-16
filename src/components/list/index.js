import dva from 'dva'
import model from './model'
import component from './component'
dva.model(model)
export default component
export function initListData(cb) {
    dva._store.dispatch({ type: 'list/fetchNotes', cb })
}