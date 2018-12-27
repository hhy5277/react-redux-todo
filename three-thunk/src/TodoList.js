import React, { Component } from 'react'
//引入antd
import 'antd/dist/antd.css'
// 从store中取数据
import store from './store'
// import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM} from './store/actiionTypes'
import {ADD_TODO_ITEM, DEL_TODO_ITEM} from './store/actiionTypes'
import {getInputChangeAction, getTodoList} from './store/actionCreator'

import TodoListUI from './TodoListUI'

export default class TodoList extends Component {

    //接收数据
    constructor(props) {
        super(props);
        //将仓库中的数据存入本页面的state中
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.onKeyup = this.onKeyup.bind(this);
        this.handleItemDel = this.handleItemDel.bind(this);
        // 去订阅store，只要store改变就执行
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return (
            <TodoListUI 
            inputValue={this.state.inputValue}
            list={this.state.list}
            handleInputChange={this.handleInputChange}
            handleBtnClick={this.handleBtnClick}
            handleItemDel={this.handleItemDel}
            onKeyup={this.onKeyup}
             />
        )
    }

    componentDidMount() {
        // 创建action
        const action = getTodoList();
        // 打印getTodoList生成的action，即是定义的返回的那个函数
        console.log(action);
        // 到这一步，中间件已经获取到了store中的数据，执行return的函数，可以打印出中间件获取的数据
        store.dispatch(action);
        // axios.get('https://www.easy-mock.com/mock/5c18c18a3ec2e72f86dbe5b9/redux_learn_demok/reduxjinjie').then((res)=>{
        //     const data = res.data.data;
        //     const action = initListAction(data)
        //     console.log('action action', action)
        //     store.dispatch(action);
        // })
    }

    handleInputChange(e) {
        /** 
        // 创建个action,action接收给对象
        const action = {
            // 要给store说句话，改变inputValue
            type: CHANGE_INPUT_VALUE,
            value: e.target.value
        }
        */
       //同上，这里使用了actionCreator
       const action = getInputChangeAction(e.target.value)
        // 怎么把这句话传给store呢，store有个dispatch方法
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
        console.log('改变啦改变啦',this.state)
    }

    handleBtnClick() {
        const action = {
            type: ADD_TODO_ITEM
        }
        store.dispatch(action);
    }

    onKeyup(e) {
        if(e.keyCode === 13) {
            this.handleBtnClick()
        }
    }

    handleItemDel(index) {
        console.log('indexindex', index)
        const action = {
            type: DEL_TODO_ITEM,
            index
        };
        store.dispatch(action);
    }
}
