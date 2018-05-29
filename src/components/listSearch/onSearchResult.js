import invariant from 'invariant'
import { Model } from 'dva'

function onSearchResult(res) {
    const notes = getNotes() // cloned notes
    const wordList = weight_N_Flat(res)
    loadList(wordList)
    
    blur()
    clearNotes()
    
    notes.forEach(note=>{
        const note = { ...note }
        highlight(note,wordList) //xss dangerousHtml
        setTimeout(function(){
            pushX(note)            
        })
    })
}

function pushX(note) {
    invariant(note.content && note.itemId && note.weight,'pushX: note缺少属性')
    Model.reduce('listSearch',(state)=>{
        const notes = [...state.notes]
        state.notes.some((noteInList,ind)=>{
            if(noteInList.weight <= note.weight) {
                notes.splice(ind,0,note)
                return true
            }
        })
        return { ...state, notes }
    }})
}

export function highlight(note,wordList) {
    // 暂时什么都不干 用昨天的xss
    return note
}

function weight_N_Flat() {
    const wordList = []
    res.forEach(el => {
        el.forEach((wordEntry,ind) => {
            if(wordList.indexOf(wordEntry.word) === -1){ // 去重
                wordList.push({ word: wordEntry.word, weight: Math.pow((16-ind),3) })    
            }
        })
    })
}

function loadList(wordList) {
    Model.reduce('listSearch',(state)=>{
        return { ...state, wordList }
    }})
}
function blur(notes) {
    Model.reduce('listSearch',(state)=>{
        return { ...state, index: null }
    }})
}
function clearNotes(notes) {
    Model.reduce('listSearch',(state)=>{
        return { ...state, notes: [] }
    }})
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

export function select(note,index,onSelect) {
    Model.reduce('listSearch',(state)=>{

        onSelect(note)
        return { ...state, index }
    }})
}
