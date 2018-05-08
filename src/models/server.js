import { _delete, post } from '../services/note'

export default {
    namespace: 'server',
    state: {
        content: '',
        itemId: '',
    },
    reducers: {
        change(state, { key, value }) {
            let obj = {}
            obj[key] = value
            return Object.assign({}, state, obj)
        },
    },
    effects: {
        * post({ note }, { call, put }) {
            const itemId = note[1]
            const content = note[2]
            yield call( post, itemId, content)
            
            global.flow.notSave = false
            yield put({ type: 'localData/change', key: 'notSave', value: false })    
        },
        * delete({ itemId }, { call, put }) {
            yield call(_delete, itemId)
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname, query }) => {})
        }
    }
}

