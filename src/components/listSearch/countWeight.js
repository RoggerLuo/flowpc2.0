import invariant from 'invariant'

export default function(note,wordList) {
    note = { ...note }
    note.weight = 0
    note._content = note.content
    wordList.forEach(word=>count(note,word))
    function count(note,word) {
        if(note._content.indexOf(word.word) != -1) {
            note.weight += parseInt(word.weight)
            note._content = note._content.replace(word.word,'')
            count(note,word)
        }
    }
    return note
}
