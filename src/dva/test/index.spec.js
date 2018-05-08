import test from '../../test.js'
import _test from 'tape'
import model from './model'
import dva from '../index.js'
const app = dva
// app.start()

test('dva.model',(t)=>{
    t('reducer的state是否添加成功',()=>{
        app.model(model)
        return app._store.getState().server.content == 'testContent'
    })
    t('添加两个相同namespace的model就要报错',()=>{
        try{
            app.model(model)
        }catch(err){
           return err.name == 'Invariant Violation' 
        }
        return false
    })
    t('dispatch一个方法，测试 是否成功添加了reduce方法',()=>{
        app._store.dispatch({type:'server/change',key:'content',value:'roger'})
        return app._store.getState().server.content == 'roger'        
    })
    t('没有namespace会报错',()=>{
        try{
            app.model({})            
        }catch(err){
            return err.name == 'Invariant Violation' 
        }
        return false
    })
})

import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'
export function* incrementAsync() {
    yield delay(1000)
    yield put({type:'server/change',key:'content',value:'sagaTestFinal'})

}
export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

_test('saga',(t)=>{
    app.saga(watchIncrementAsync)
    app._store.dispatch({type:'INCREMENT_ASYNC'})
    t.equal(
        app._store.getState().server.content,
        'roger',
        'saga触发了，但是没有立即修改reduce state'
    )
    setTimeout(function(){
        t.equal(
            app._store.getState().server.content,
            'roger',
            'saga触发的0.5秒之后，没有修改reduce state'
        )
    },500)
    setTimeout(function(){
        t.equal(
            app._store.getState().server.content,
            'sagaTestFinal',
            'saga触发的2秒之后，修改了reduce state'
        )
        t.end()
    },2000)
})
