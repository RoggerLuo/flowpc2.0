import invariant from 'invariant'

export default function(app) {
    return { 
        getState: app._store.getState,
        change,
        reduce
    }
    function change(namespace,key,value){
        invariant(namespace && key && value,'Model change方法需要传入namespace，key,value')
        app._store.dispatch({ type: `${namespace}/change`, key, value })
    }
    function reduce(namespace,reducer){
        invariant(namespace && reducer,'Model reduce方法需要传入namespace，reducer')
        app._store.dispatch({ type: `${namespace}/std`, reducer })
    }

}
