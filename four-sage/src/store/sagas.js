// 一定导出Generator函数

import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actiionTypes'
import axios from 'axios';
import { initListAction } from './actionCreator'

function* getInitList() {
    try {
        // 正常返回之后，数据直接给res
    const res = yield axios.get('https://www.easy-mock.com/mock/5c18c18a3ec2e72f86dbe5b9/redux_learn_demok/reduxjinjie');
    const action = initListAction(res.data.data);
    console.log('action action', action);
    // yield代表着上面的代码执行完成后，才会执行
    yield put(action); // 相当于store.dispatch，使用了saga，必须使用put(action);
    }catch(e){
        console.log('接口请求失败，错误信息：', e.message)
    }

}
function* mySaga() {
    // 只要接收到GET_INIT_LIST类型的action，就执行getInitList方法
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;