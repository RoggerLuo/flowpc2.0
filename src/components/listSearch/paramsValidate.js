import invariant from 'invariant'

export default function(note,wordList) {
    invariant(typeof(note) ==='object','note应该为object')
    invariant(!!note,'note不能为空')
    invariant(note.content && note.itemId,'note要有content和itemId')
    invariant(!!wordList,'wordList不能为空')
    invariant(wordList instanceof Array,'wordList应该是数组')
}
