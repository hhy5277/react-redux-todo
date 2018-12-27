import {CHANGE_INPUT_VALUE, INIT_LIST_ACTION} from './actiionTypes'
import axios from 'axios'
// getInputChangeAction就是一个actionCreator，帮助创建一个input和value的action使用的
//这里直接返回个跟todolist里写的一样的
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

// 这是发起axios初始化数据的
export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

// 中间件发请求
export const getTodoList = () => {
    // 因为没有store，所以这里可以接收一个dispatch
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5c18c18a3ec2e72f86dbe5b9/redux_learn_demok/reduxjinjie').then((res)=>{
            const data = res.data.data;
            console.log('中间件请求响应的数据', data);
            const action = initListAction(data)
            dispatch(action);
        })
    }
}