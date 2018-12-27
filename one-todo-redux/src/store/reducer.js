import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM} from './actiionTypes'
// state 所有书籍，整个数据
const defaultState = {
    // 给两个默认的
    inputValue: '',
    list: []
}
export default (state = defaultState, action) => {
    //添加start
    // 现在可以接收到action里面的数据了（之前的数据,当前数据、操作信息）
    console.log(state, action);
    if (action.type === CHANGE_INPUT_VALUE) {
        // 对之前的state做一次深拷贝
        // reducer可以接收state，单是绝不能修改state，所以要深拷贝
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        // 直接返回给了 store
        return newState;
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        console.log('add_todo_item->newState', newState);
        return newState;
    }
    //添加end

    //删除start
    if (action.type === DEL_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state
}