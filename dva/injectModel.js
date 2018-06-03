import invariant from 'invariant'
import runSaga from './runSaga'
import composeReducer from './composeReducer'
import { combineReducers } from 'redux'

export default function(sagaMiddleware,reducers,store){
    return (m)=>{
        const runSingleSaga = runSaga(sagaMiddleware,m.namespace)
        injectReducer(m,reducers)
        injectSaga(m.effects)  
        function injectSaga(...args) {
            invariant(args.length !== 0, `saga's arg is empty`)
            if (args.length === 1) {
                invariant(typeof(args[0]) === 'object', `the only arg of saga should be an object`)
                Object.keys(args[0]).forEach(key => {
                    runSingleSaga(key, args[0][key])
                })
            }
        }

    }
    function injectReducer(m,reducers) {
        invariant(
            Object.keys(reducers).every(key => key !== m.namespace),
            `reducer name:[${m.namespace}] is conflict with other reducers`
        )
        reducers[m.namespace] = composeReducer(m)
        store.replaceReducer(combineReducers({ ...reducers }))
        m.event && m.event.onReady && m.event.onReady(store.dispatch)
    }
}
