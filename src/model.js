import dva from 'dva'
dva.model({
    namespace: 'app',
    state: {
        showSearchPanel: false,
        content: '',
    },

    reducers: {
        change(state, { key, value }) {
            let obj = {}
            obj[key] = value
            return Object.assign({}, state, obj)
        },
    },
    event: {
        onReady({ dispatch, history }) {
            history.listen(({ pathname, query }) => {})
        }
    }
})

