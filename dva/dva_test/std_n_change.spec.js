dva.model({
    namespace: 'test',
    state: { 'testkey': 'init' },
    reducers: {}
})

dva.test('Model', (t) => {
    t('新增Model静态方法', () => {
        return !!dvaStatic.Model
    })
    t('Model有getState方法', () => {
        return dvaStatic.Model.getState().test.testkey === 'init'
    })
})

dva.test('新建model自动注入std和change这两个reducers', (t) => {
    t('Change方法', () => {
        dvaStatic.Model.change('test','testkey', 'testvalue')
        return dvaStatic.Model.getState().test.testkey === 'testvalue'
    })

    t('Reduce方法', () => {
        dvaStatic.Model.reduce('test', state => ({ ...state, testkey: 'testvalue Reduced' }))
        return dvaStatic.Model.getState().test.testkey === 'testvalue Reduced'
    })
})

dva.test('保留关键字,model不能出现std和change，不然报错', (t) => {
    t('model不能出现change，不然报错', () => {
        try {
            dva.model({
                namespace: 'test2',
                state: { 'testkey': 'init' },
                reducers: {
                    change() {

                    }
                }
            })
        } catch (err) {
            return err.name == 'Invariant Violation'
        }
        return false
    })

    t('model不能出现change，不然报错', () => {
        try {
            dva.model({
                namespace: 'test2',
                state: { 'testkey': 'init' },
                reducers: {
                    std() {

                    }
                }
            })
        } catch (err) {
            return err.name == 'Invariant Violation'
        }
        return false
    })
})