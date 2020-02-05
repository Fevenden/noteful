import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './header/header';
import dummyStore from './dummy-store';
import Sidebar from './sidebar/sidebar';
import NoteList from './noteList/NoteList';
import NotePage from './notePage/NotePage';
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
          <Route 
            exact path='/'
            render={() => 
              <main>  
                <Sidebar 
                  state={this.state}
                />
                <NoteList
                  state={this.state}
                />
              </main>
            }
          />
          <Route
            path='/folder/:folderId'
            render={({match}) => {
              return (
                <main>
                  <Sidebar
                    state={this.state}
                    />
                  <NoteList
                    state={this.state}
                    match={match}
                  />
                </main>
              )
            }}
          />
          <Route 
            path='/note/:noteId'
            render={(match) =>
              <main>
                <NotePage 
                  state={this.state}
                  match={match}
                />
              </main>
            }
          />
      </div>
    );
  }
}

export default App;
