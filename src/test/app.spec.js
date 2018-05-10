import test from 'utils/test'

test('app main',(t)=>{
    t('main model中有一个showSearchPanel来控制 search界面是否显示')
    t('有新建note功能')
})
test('notes概念 组件,只提供跟后端服务器交互的sagas',(t)=>{
    t('sagas: get notes列表, del note, post note ')
    t('saga的输入note对象规范：{id,content,modifiedTime}')
    t('saga的输出list中note对象规范：[{id,content,modifiedTime,wordList}]')
    // 用mock或者什么的
})
test('list组件',(t)=>{
    t('model属性：notes列表,index指针')
    t('model onReady: 请求notes列表')

    t('note组件 包含属性:index,"note"对象')
    t('点击note 改变传入index,切换editor,')
})
test('note组件',(t)=>{
    t('必须传入index')
})
test('editor组件',(t)=>{
    t('model里有 note对象:{content, id}')
    t('model里有 status状态，有unsaved和saved两个值')
    t('接受两个参数：(一个note对象,一个onChange方法),onChange方法被调用的时候提供一个值，其为当前的编辑器中的内容')
    // -----
    t('未编辑无法保存')
    t('内容没修改 无法再次保存')
})

test('searchPanel组件',(t)=>{
    t('api:接收一个boolean:show变量')
    t('拥有自己的model')
})