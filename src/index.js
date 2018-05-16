import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import dva from 'dva'
import App from './App'

import model from './model'
dva.model(model)

render(
    <Provider store={dva._store}>
        <App />
    </Provider>,
    document.getElementById('root')
)