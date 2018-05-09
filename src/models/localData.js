import dva from 'dva'

const state = {
    notes: [],
    index: 0,
    index2: 0,
    index2Locked: false,
    notSave: false,
    timeReverse: false
}

dva.model({
    namespace: 'editor',
    state,
    reducers: {
        tihuChange(state) {
            return Object.assign({}, state, { index2Locked: !state.index2Locked }) //.slice(0,10)
        },
        sortNotes(state) {
            const newNotes = state.notes.slice(0)
            newNotes.sort((a, b) => b[5] - a[5])
            return Object.assign({}, state, { notes: newNotes }) //.slice(0,10)
        },
        change(state, { key, value }) {
            let obj = {}
            obj[key] = value
            return Object.assign({}, state, obj)
        },
        createNote(state) {
            const itemId = Date.parse(new Date()) / 1000
            const newNotes = state.notes.slice(0)
            newNotes.unshift([itemId, itemId, '', itemId])
            return Object.assign({}, state, { index: 0, notes: newNotes })
        },
        deleteCurrentNote(state) {
            const index = state.index
            const newNotes = state.notes.slice(0)
            newNotes.splice(index, 1)
            if (index === (state.notes.length - 1)) { //如果是最后一个
                return Object.assign({}, state, { index: index - 1, notes: newNotes })
            }
            return Object.assign({}, state, { index: index, notes: newNotes })
        },
        modify_note_content(state, { content }) {
            const index = state.index
            const notes = state.notes.slice(0)
            notes[index][2] = content
            const itemId = Date.parse(new Date()) / 1000
            notes[index][3] = itemId
            notes[index][6] = content //每次编辑就把 高亮效果取消，编程实时编辑效果
            return Object.assign({}, state, { notes })
        },
        point(state, { index }) {
            if (!state.index2Locked) {
                const notes = state.notes.slice(0)
                return Object.assign({}, state, { index, index2: notes[index] })
            }
            return Object.assign({}, state, { index })
        },
        loadlast(state) {
            const index = state.index
            if ((index - 1) >= 0) {
                return Object.assign({}, state, { index: index - 1 })
            }
            return state
        },
        loadnext(state) {
            const index = state.index
            if ((index + 1) < state.notes.length) {
                return Object.assign({}, state, { index: index + 1 })
            }
            return state
        },
        // sortByTime(state){
        //     const notes = state.notes.slice(0)
        //     if(state.timeReverse){
        //         notes.sort((a,b) =>  b[3] - a[3])
        //     }else{
        //         notes.sort((a,b) =>  a[3] - b[3])                
        //     }
        //     return Object.assign({}, state, { index: 0, timeReverse: !state.timeReverse, notes }) //.slice(0,10)
        // },

    },
    effects: {
        * getNotes({ placeholder }, { call, put }) {
            const notes = yield call(get)
            yield put({ type: 'change', key: 'notes', value: notes })
            if (notes.length !== 0) {
                yield put({ type: 'load', index: 0 })
            }
        },
        * delete({ placeholder }, { call, put, select }) {
            const index = yield select(state => state.localData.index)
            const notes = yield select(state => state.localData.notes)
            const itemId = notes[index][1]
            const content = notes[index][2].slice(0, 20)
            if (global.confirm(`Confirm delete the note: "${content}"?`)) {
                yield put({ type: 'deleteCurrentNote' }) //先获取itemId再删除，以免index搞乱
                yield put({ type: 'server/delete', itemId })
            }
        }
    },
    event: {
        onReady(dispatch) {}
    }
})