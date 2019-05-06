import React from 'react';

class News extends React.Component {
    constructor(props) { //props用于父子组件传值
        super(props);
        this.state = {
            userinfo: '张三'
        }
    }
    render() {
        return (
            <div>
                <div>{this.state.userinfo}</div>
                <ul>
                    <li>这是一个列表</li>
                    <li>这是一个列表</li>
                    <li>这是一个列表</li>
                    <li>这是一个列表</li>
                </ul>
            </div>
        )
    }
}

export default News;