import invariant from 'invariant'
//dva dvaStatic
import highlight from './highlight'
//dvaStatic.Xss()
const Xss = dvaStatic.Xss
dva.test('listSearch highlight',(t)=>{
    const note = { itemId:'test123', content: 'test<a>testatesta' }
    const wordList = [{ word: 'a', weight: '10'}]
    t('return translated string',()=>{
        const _note = Xss.escape(note)
        return highlight(_note,wordList).content === 'test&lt;<span class="highlight-font-color">a</span>&gt;test<span class="highlight-font-color">a</span>test<span class="highlight-font-color">a</span>' 
    })
    t('origin note object should not change',()=>{
        const _note = Xss.escape(note)
        return note.content !=  highlight(_note,wordList).content
    })
})



