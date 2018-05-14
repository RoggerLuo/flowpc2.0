import dva from 'dva'
import model from './model'
import sagas from './sagas'
import component from './component'
dva.saga(sagas)
dva.model(model)
export default component