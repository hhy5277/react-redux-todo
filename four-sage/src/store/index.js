import { createStore, applyMiddleware, compose } from 'redux'
// 引入reducer，相当于笔记本
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'

// 多个中间件
// 使用这个方法创建一个sagaMiddleware
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose ;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));


// 创建公共仓库,把笔记本传给start
const store = createStore(reducer, enhancer);

// 让sagas.js run起来，必须在创建好store之后
sagaMiddleware.run(todoSagas)

export default store