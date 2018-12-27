
// 因为有默认的数据，所以给个默认值
const defaulltState = {
    inputValue: '',
    list: []
}
// reducer是个纯函数，接收两个参数，一个state，一个action
export default (state = defaulltState, action) => {
    if (action.type === 'change_input_value') {
        // 把state深拷贝
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === 'add_item') {
        // 把state深拷贝
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        return newState;
    }
    return state;
}