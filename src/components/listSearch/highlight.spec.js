import invariant from 'invariant'
//dva dvaStatic
import { highlight } from './onSearchResult'
//dvaStatic.Xss()

dva.test('listSearch highlight',(t)=>{
    const note = { itemId:'test123', content:'test<a>testatesta'}
    const wordList = { word: 'a', weight: '10'}
    t('feed with note, and wordlist',()=>{
        highlight(note,wordList)
        return true
    })
    t('if feed with null note, alarm',()=>{
        try{
            highlight(null,wordList)
        }catch(err){
            return err.name == 'Invariant Violation'
        }
        return false
    })
    t('if feed with wrong note, alarm',()=>{
        try{
            highlight({},wordList)
        }catch(err){
            return err.name == 'Invariant Violation'
        }
        return false
    })
    t('if feed a undefined wordList, alarm',()=>{
        try{
            highlight(note)
        }catch(err){
            return err.name == 'Invariant Violation'
        }
        return false
    }

    t('if feed a wrong wordList, alarm',()=>{
        try{
            highlight(note,{})
        }catch(err){
            return err.name == 'Invariant Violation'
        }
        return false
    }
    t(`if feed wordlist with an emptyArray, it's ok`,()=>{
        highlight(note,[])
        return true
    })

    t('return translated string',()=>{
        return highlight(note,wordlist) === 'test&lt;a&gt;testatesta' 
    })
})





