import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './header/header'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <main>

        </main>
      </div>
    );
  }
}

export default App;
