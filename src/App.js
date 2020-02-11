import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
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
    fetch('http://localhost:9090/folders')
    .then(r => r.json())
    .then(rJson => this.setState({folders: rJson}))
    .catch(err => console.log(err));

    fetch('http://localhost:9090/notes')
    .then(r => r.json())
    .then(rJson => this.setState({notes: rJson}))
    .catch(err => console.log(err));
  };

  addFolder = () => {
    console.log('used add folder')
  };

  addNote = () => {
    console.log('used add note')
  };

  deleteNote = (noteId) => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !==noteId)
    });
  };

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
              render={() => 
                <>  
                  <Sidebar />
                  <NoteList />
                </>
              }
              />
            <Route
              path='/folder/:folderId'
              render={() =>
                <>
                  <Sidebar/>
                  <NoteList/>
                </>
              }
            />
            <Route 
              path='/note/:noteId'
              component={NotePage}
            />
          </main>
        </NotefulContext.Provider>  
      </div>
    );
  }
}

export default App;
