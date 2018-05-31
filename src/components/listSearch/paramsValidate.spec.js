import invariant from 'invariant'
import paramsValidate from './paramsValidate'
const Xss = dvaStatic.Xss
dva.test('paramsValidate(note,wordList) ',(t)=>{
    const note = { itemId:'test123', content: 'test<a>testatesta' }
    const wordList = [{ word: 'a', weight: '10'}]
    t('feed with note, and wordlist',()=>{
        paramsValidate(note,wordList)
        return true
    })
    t('if feed with null note, alarm',()=>{
        try{
            paramsValidate(null,wordList)
        }catch(err){
            return err.name == 'Invariant Violation'
        }
        return false
    })
    t('if feed with wrong note, alarm',()=>{
        try{
            paramsValidate({},wordList)
        }catch(err){
            return err.name == 'Invariant Violation'
        }
        return false
    })
    t('if feed a undefined wordList, alarm',()=>{
        try{
            paramsValidate(note)
        }catch(err){
            return err.name == 'Invariant Violation'
        }
        return false
    })

    t('if feed a wrong wordList, alarm',()=>{
        try{
            paramsValidate(note,{})
        }catch(err){
            return err.name == 'Invariant Violation'
        }
        return false
    })
    t(`if feed wordlist with an emptyArray, it's ok`,()=>{
        paramsValidate(note,[])
        return true
    })

})



