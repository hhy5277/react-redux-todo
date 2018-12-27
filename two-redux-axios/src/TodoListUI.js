import React from 'react'
import { Input, Button, List } from 'antd'

export default (props) => {
    return (
        <div style={{marginTop:10, marginLeft:10}}>
                <div>
                    <Input placeholder="输入内容回车或提交 | 点击列表删除" value={props.inputValue} style={{width:300, marginRight:10}} onChange={props.handleInputChange} onKeyUp={props.onKeyup} />
                    <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
                    <List
                        style={{marginTop:10, width:300}}
                        bordered
                        dataSource={props.list}
                        footer={<div className="ant-list-empty-text" onClick={()=>{window.open("http://www.chao99.top")}}>www.chao99.top出品</div>}
                        renderItem={(item, index) => (<List.Item onClick={() => {props.handleItemDel(index)}}>{item}</List.Item>)}
                        />
                        
                </div>
            </div>
    )
}

/** 因为是无状态组件，所以可以写成以上方法
export default class TodoListUI extends Component {
    render() {
        return (
            <div style={{marginTop:10, marginLeft:10}}>
                <div>
                    <Input placeholder="输入内容回车或提交 | 点击列表删除" value={this.props.inputValue} style={{width:300, marginRight:10}} onChange={this.props.handleInputChange} onKeyUp={this.props.onKeyup} />
                    <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
                    <List
                        style={{marginTop:10, width:300}}
                        bordered
                        dataSource={this.props.list}
                        footer={<div className="ant-list-empty-text" onClick={()=>{window.open("http://www.chao99.top")}}>www.chao99.top出品</div>}
                        renderItem={(item, index) => (<List.Item onClick={() => {this.props.handleItemDel(index)}}>{item}</List.Item>)}
                        />
                        
                </div>
            </div>
        )
    }
}
*/

/**
 * 同理
 * const TodoListUI = ...
 * export defalut TodoListUI
 */
