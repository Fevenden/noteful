import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './header/header';
import dummyStore from './dummy-store';
import Sidebar from './sidebar/Sidebar';
import NoteList from './noteList/NoteList';
import NotePage from './notePage/NotePage';
import NotefulContext from './NotefulContext';
import './App.css';

class App extends Component {
  state = {
    folders: [],
    notes: [],
  }

  componentDidMount() {
    setTimeout(() => this.setState(dummyStore), 1000)
  }

  addFolder = () => {
    console.log('used add folder')
  }

  deleteFolder = () => { 
    console.log('used delete folder')
  }

  addNote = () => {
    console.log('used add note')
  }

  deleteNote = () => {
    console.log('used delete note')
  }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      addFolder: this.addFolder,
      deleteFolder: this.deleteFolder,
      addNote: this.addNote,
      deleteNote: this.deleteNote,
    }
    return (
      <div className='app'>
        <Header />
        <NotefulContext.Provider value={contextValue}>
          <main>
            <Route 
              exact path='/'
              // component={{
              //   sidebar: Sidebar,
              //   main: NoteList,
              // }}
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
              component={{
                sidebar: Sidebar,
                main: NoteList,
              }}
              // render={({match}) =>
              //   <>
              //     <Sidebar/>
              //     <NoteList
              //       match={match}
              //     />
              //   </>
              // }
            />
            <Route 
              path='/note/:noteId'
              component={NotePage}
              // render={({match}) =>
              //   <NotePage 
              //     state={this.state}
              //     match={match}
              //   />
              // }
            />
          </main>
        </NotefulContext.Provider>  
      </div>
    );
  }
}

export default App;
