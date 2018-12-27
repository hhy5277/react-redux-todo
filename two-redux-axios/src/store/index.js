import { createStore } from 'redux'
// 引入reducer，相当于笔记本
import reducer from './reducer'

// 创建公共仓库,把笔记本传给start
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store