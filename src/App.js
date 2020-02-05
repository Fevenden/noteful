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
        <main>
          <Route 
            exact path='/'
            render={() => 
              <>  
                <Sidebar 
                  state={this.state}
                  />
                <NoteList
                  state={this.state}
                  />
              </>
            }
            />
          <Route
            path='/folder/:folderId'
            render={({match}) =>
              <>
                <Sidebar
                  state={this.state}
                  />
                <NoteList
                  state={this.state}
                  match={match}
                  />
              </>
            }
          />
          <Route 
            path='/note/:noteId'
            render={({match}) =>
            <NotePage 
            state={this.state}
            match={match}
            />
          }
          />
        </main>
      </div>
    );
  }
}

export default App;
