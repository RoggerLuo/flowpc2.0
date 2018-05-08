import test from 'tape'

export default (title,body) => {
    test(title,(t)=>{
        body(subTopic)
        t.end()
        function subTopic(subTitle,subBody){
            t.equal(subBody(),true,subTitle)
        }
    })
}
