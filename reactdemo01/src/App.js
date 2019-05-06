import React, { Component } from 'react';
import './assets/css/App.css';

import Home from './components/Home';
import News from './components/News';

class App extends Component {
  //render是模板
  render() {
    return (
      <div className="App">
        我是根组件
        <Home></Home>
        <News></News>
      </div>
    );
  }
}

export default App;