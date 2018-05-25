import dva from 'dva'
import model from './model'
import component from './component'
dva.model(model)
export default component

function *(){
    // dispatch saga 可以异步
}
function measureSimilarity(notes,wordList,ind){
    const note = notes[ind] 
    const note_word_list = JSON.parse(note[3])
    if(!note[6]) note[6] = note[2]
    wordList.forEach(entry => {
        if(note_word_list.indexOf(entry.word) !== -1){
            note[5] += entry.weight
            note[6] = markRedStep1(note[6],entry.word)
        }
    })
    if(note[5] && (note[5] > 0)){
        global.flow.dispatch({ type:'localData/sortNotes' }) //然后这个触发1        
    }

    if( (ind+1) < notes.length){
        setTimeout(function(){
            measureSimilarity(notes,wordList,ind+1)
        })
    }else{
        // 进入这里意味着 结束了
        notes.forEach(_note=>{
            _note[6] = markRedStep2(_note[6])
        })
        global.flow.dispatch({ type:'localData/sortNotes' }) //然后这个触发1
    }
}

export function loadNotesData(notes) {
    dva._store.dispatch({ type: 'listSearch/std', method(state){
        return { ...state, notes}
    }})
}
export function loadWordListData(res) {
    dva._store.dispatch({ type: 'listSearch/std', method(state){
        const wordList = []
        res.forEach(el => {
            el.forEach((wordEntry,ind) => {
                if(wordList.indexOf(wordEntry.word) === -1){ // 去重
                    wordList.push({ word: wordEntry.word, weight: Math.pow((16-ind),3) })    
                }
            })
        })
        return { ...state, wordList }
    }})
}
export function blur(notes) {
    dva._store.dispatch({ type: 'listSearch/std', method(state){
        return { state, index: null }
    }})
}
export function countWeight(notes) {
    dva._store.dispatch({ type: 'listSearch/std', method(state){

        return
    }})
}
export function highlight(note) {
    dva._store.dispatch({ type: 'listSearch/std', method(state){
        state.wordList
        state.
        return
    }})
}

export function pushX(notes) {
    dva._store.dispatch({ type: 'listSearch/std', method(state){

        return
    }})
}

export function select(note,index,onSelect) {
    dva._store.dispatch({ type: 'listSearch/std', method(state){
        onSelect(note)
        return { ...state, index }
    }})
}
