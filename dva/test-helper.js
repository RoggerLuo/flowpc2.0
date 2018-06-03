import test from 'tape'
import dva from './index.js'
const _test =  (title,body) => {
    test(title,(t)=>{
        body(subTopic)
        t.end()
        function subTopic(subTitle,subBody){
            t.equal(subBody(),true,subTitle)
        }
    })
}
dva.test = _test
global.dva = dva