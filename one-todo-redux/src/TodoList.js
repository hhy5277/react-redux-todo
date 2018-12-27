import React, { Component } from 'react'
//引入antd
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
// 从store中取数据
import store from './store'
// import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM} from './store/actiionTypes'
import {ADD_TODO_ITEM, DEL_TODO_ITEM} from './store/actiionTypes'
import {getInputChangeAction} from './store/actionCreator'

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
        // 去订阅store，只要store改变就执行
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return (
            <div style={{marginTop:10, marginLeft:10}}>
                <div>
                    <Input placeholder="输入内容回车或提交 | 点击列表删除" value={this.state.inputValue} style={{width:300, marginRight:10}} onChange={this.handleInputChange} onKeyUp={this.onKeyup} />
                    <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                    <List
                        style={{marginTop:10, width:300}}
                        bordered
                        dataSource={this.state.list}
                        footer={<div className="ant-list-empty-text" onClick={()=>{window.open("http://www.chao99.top")}}>www.chao99.top出品</div>}
                        renderItem={(item, index) => (<List.Item onClick={this.handleItemDel.bind(this, index)}>{item}</List.Item>)}
                        />
                        
                </div>
            </div>
        )
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
        const action = {
            type: DEL_TODO_ITEM,
            index
        };
        store.dispatch(action);
    }
}
