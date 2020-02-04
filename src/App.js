import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './header/header';
import dummyStore from './dummy-store';
import Sidebar from './sidebar/sidebar';
import NoteList from './noteList/NoteList';
import './App.css';

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
        <main>
          <Sidebar 
            state={this.state}
          />
          <NoteList 
            state={this.state}
          />
        </main>
      </div>
    );
  }
}

export default App;
