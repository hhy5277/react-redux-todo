import { createStore } from 'redux';
import reducer from './reducer';

// 创建store的时候把reducer传入
const store = createStore(reducer);

export default store;