import {CHANGE_INPUT_VALUE, INIT_LIST_ACTION} from './actiionTypes'
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