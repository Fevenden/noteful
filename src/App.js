import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import NoteList from './noteList/NoteList';
import NotePage from './notePage/NotePage';
import NotefulContext from './NotefulContext';
import AddNote from './AddNote/AddNote'
import './App.css';
import AddFolder from './AddFolder/AddFolder';
import ErrorBoundry from './ErrorBoundry';

class App extends Component {
  state = {
    folders: [],
    notes: [],
    folderErr: null,
    noteErr: null
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/folders')
    .then(r => {
      if (!r.ok) {
        throw new Error('could not fetch folders')
      }
      return r.json()
    })
    .then(rJson => this.setState({folders: rJson}))
    .catch(err => {

      this.setState({
        folderErr: err.message
      })
    });

    fetch('http://localhost:8000/api/notes')
    .then(r => {
      if (!r.ok) {
        throw new Error('Could not fetch notes')
      }  
      return r.json()
    })
    .then(rJson => this.setState({notes: rJson}))
    .catch(err => {
      this.setState({
        noteErr: err.message
      })
    });
  };

  addFolder = (folder) => {
      this.setState({
        folders: [ ...this.state.folders, folder ]
      })
  };

  addNote = (note) => {
    this.setState({
      notes: [...this.state.notes, note]
    })
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
                  <ErrorBoundry>
                    <Sidebar folderErr={this.state.folderErr}/>
                  </ErrorBoundry>
                  <ErrorBoundry>
                    <NoteList noteErr={this.state.noteErr}/>
                  </ErrorBoundry>
                </>
              }
              />
            <Route
              path='/folder/:folderId'
              render={() =>
                <>
                <ErrorBoundry>
                  <Sidebar folderErr={this.state.folderErr}/>
                </ErrorBoundry>
                <ErrorBoundry>
                  <NoteList noteErr={this.state.noteErr}/>
                </ErrorBoundry>
                </>
              }
            />
              <Route 
                path='/note/:noteId'
                render={() =>
                  <ErrorBoundry>
                    <NotePage />
                  </ErrorBoundry>
                }
              />
              <Route
                path='/addfolder'
                // component={AddFolder}
                render={() =>
                  <ErrorBoundry>
                    <AddFolder />
                  </ErrorBoundry>
                }
              />
              <Route 
                path='/addnote'
                // component={AddNote}
                render={() => 
                <ErrorBoundry>
                  <AddNote />
                </ErrorBoundry>
                }
              />
          </main>
         
          
        </NotefulContext.Provider>  
      </div>
    );
  }
}

export default App;
