import {CHANGE_INPUT_VALUE} from './actiionTypes'
// getInputChangeAction就是一个actionCreator，帮助创建一个input和value的action使用的
//这里直接返回个跟todolist里写的一样的
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})