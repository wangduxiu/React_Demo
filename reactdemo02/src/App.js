import React, { Component } from 'react';
import Home from '../src/components/Home'



class App extends Component {
  //render是模板
  render() {
    return (
      <div className="App">
        <h2>我是根组件</h2>
        <Home></Home>
      </div>

    );
  }
}

export default App;