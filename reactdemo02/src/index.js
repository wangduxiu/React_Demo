import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css'; //index.css 可以删掉
import App from './App'; //引入app组件
import * as serviceWorker from './serviceWorker'; //加快react运行速度的js文件

ReactDOM.render(<App />, document.getElementById('root')); //将app组件渲染到root节点上 root节点在index.html中

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
