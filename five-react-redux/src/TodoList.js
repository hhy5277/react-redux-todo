import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {

    // 原始获取方式，用了react-redux，就不用这些了
    // constructor(props) {
    //     super(props);
    //     this.state = store.getState();
    // }

    render() {
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.changeInputValue} />
                    <button onClick={this.props.handleClick}>提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item,index) =>{
                            return <li key={index} onClick={this.props.handleDelete}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}


// 接收一个state数据，也就是store数据，然后return一个对象
// 规则，store的值映射给这个组件，成为本组件的props
// 帮助理解：connect是连接，谁和谁连接，todolist和store做连接，怎么连接，有个映射方法是mapStateToProps，怎么映射呢，state是store数据，store里的inputValue映射到哪里呢，映射到组件的props里面，props哪里呢，props的inputValue上
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        // 映射list
        list: state.list
    }
}

// 概述：dispatch参数为store.dispatch，props就是props，把store的dispatch方法挂载到props上，在input的onchang绑定changeInputValue方法，在这就可以调取store.dispatch方法
// 可以接收e参数，e.target.value就为每次输入的input值，改变store数据，就需要先创建action，action为一个而对象，通过dispatch发给store，store会派发给reducer
const mapDispatchTopaops =(dispatch) => {
    return {
        changeInputValue(e) {
            console.log(e.target.value)
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action)
        },

        // 为什么写到这里，因为点击按钮之后，需要派发action
        handleClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action)
        },
    }
}
//让todolist组件和store做连接
export default connect(mapStateToProps,mapDispatchTopaops)(TodoList)
