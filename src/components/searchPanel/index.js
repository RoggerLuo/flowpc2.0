import dva from 'dva'
import model from './model'
import component from './component'
// import onSearchInput from './onSearchInput'
// import getSimilarNotes from './getSimilarNotes'
// import toggle from './toggle'

// global.flow = global.flow || {}
// global.flow.search = { onSearchInput, getSimilarNotes, components, toggle }
dva.model(model)
export default component
export function toggle() {
    dva._store.dispatch({ type: 'searchPanel/toggle' })
}