import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './header/header';
import dummyStore from './dummy-store';
import Sidebar from './sidebar/sidebar';

class App extends Component {
  state = {
    folders: [],
    notes: [],
  }

  componentDidMount() {
    setTimeout(() => this.setState(dummyStore), 1000)
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <Sidebar 
          state={this.state}
        />
        <main>

        </main>
      </div>
    );
  }
}

export default App;
