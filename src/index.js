import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import dva, { Model, Constant } from 'dva'
import App from './App'

import model from './model'
Model.create(model)
Constant.register({ api: `http://47.75.9.249:5555` })

render(
    <Provider store={dva._store}>
        <App />
    </Provider>,
    document.getElementById('root')
)