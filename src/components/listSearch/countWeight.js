import invariant from 'invariant'

export default function(note,wordList) {
    note = { ...note }
    note.weight = 0
    wordList.forEach(word=>count(note,word))
    function count(note,word) {
        if(note.content.indexOf(word.word) != -1) {
            note.weight += parseInt(word.weight)
            note.content = note.content.replace(word.word,'')
            count(note,word)
        }
    }
    return note
}
