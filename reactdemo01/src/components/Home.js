import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super();
        //定义数据
        this.state = {
            name: '张三',
            age: 30,
            userInfor: {
                job: '程序员',
                money: '10000'
            }
        }
    }

    render() {
        return (
            <div>
                <h2>我是home组件</h2>
                <p>姓名：{this.state.name}</p>
                <p>年龄：{this.state.age}</p>
                <p>（对象）职业：{this.state.userInfor.job}</p>
                <p>（对象）月薪：{this.state.userInfor.money}</p>
            </div>
        )
    }
}

export default Home;