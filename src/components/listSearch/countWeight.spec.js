import invariant from 'invariant'
import countWeight from './countWeight'
dva.test('countWeight of note',(t)=>{
    const note = { itemId:'test123', content: 'test<a>testatesta' }
    const wordList = [{ word: 'a', weight: 10},{ word:'t',weight: 2}]
    t('return translated string',()=>{
        return countWeight(note,wordList).weight ===  42
    })
})



