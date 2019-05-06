import React, { Component } from 'react';
import '../assets/css/index.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '我是Home组件中的数据',
            title: '我是一个title',
            color: 'red'
        }
    }
    render() {
        return (
            <div>

                <div title={this.state.title}></div>
                <h3>{this.state.msg}</h3>
                <br />
                <div className="red">我是一个红色的DIV</div>
                <div className={this.state.color}>我是一个红色的DIV</div>
                <br />
                <label htmlFor="name">姓名：</label>
                <input id="name"/>
            </div>
        )
    }
}

export default Home;