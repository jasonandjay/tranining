import React from 'react'
import ReactDom from 'react-dom'
// 引入根context
// 引入store
import store from './store/index'
import StoreContext from './context/StoreContext'
import App from './App'

ReactDom.render(<StoreContext.Provider value={store}>
        <App/>
    </StoreContext.Provider>
, document.querySelector("#root"))