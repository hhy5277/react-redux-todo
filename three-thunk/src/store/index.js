import { createStore, applyMiddleware, compose } from 'redux'
// 引入reducer，相当于笔记本
import reducer from './reducer'
import thunk from 'redux-thunk';

// 多个中间件
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose ;
const enhancer = composeEnhancers(applyMiddleware(thunk),);

// 创建公共仓库,把笔记本传给start
const store = createStore(reducer, enhancer);

export default store