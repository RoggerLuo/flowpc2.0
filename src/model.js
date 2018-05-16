import { initListData } from 'components/list'
import { replace } from 'components/editor'

export default {
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
    effects: {},
    event: {
        onReady(dispatch) {
            // 应该在高层调用低层应用方法
            initListData((notes) => {
                if (notes[0]) {
                    replace(notes[0])
                }
            })
        }
    }
}