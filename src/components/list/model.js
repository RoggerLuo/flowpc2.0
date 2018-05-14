export default {
    namespace: 'list',
    state: {
        notes: [],
        index: 0,
    },
    reducers: {
        fetch(state, { notes }) {
            return { ...state, notes }
        },
    },
    event: {
        onReady(dispatch) {
            dispatch({ type: 'saga/fetchNotes' })
        }
    }
}