import React from 'react';
import NotefulContext from '../NotefulContext';
import ValidationError from '../ValidationError';
import { withRouter } from 'react-router-dom';
import './AddNote.css'

class AddNote extends React.Component {
  static contextType = NotefulContext;

  state = {
    name: {
      value:'New Note',
      touched: false,
    },
    content: { 
      value:'',
      touched: false,
    },
    folderId: {
      value: '',
      touched: false,
    },
    error: null
  }

  updateName(name) {
    this.setState({
      name: {
        value: name,
        touched: true
      }
    });
  }

  updateContent(content) {
    this.setState({
      content: {
        value: content,
        touched: true
      }
    });
  }

  updateFolderId(folderId) {
    this.setState({
      folderId: {
        value: folderId,
        touched: true,
      }
    });
  }

  handleClickCancel = (e) => {
    this.props.history.push('/')
  }

  validateName() {
    const name = this.state.name.value;
    if (name.length === 0) {
      return 'Name is required'
    } else if (name.length < 3) {
      return 'Name must be at least 3 characters'
    } 
  }

  validateFolder() {
    const folder = this.state.folderId.value;
    const touched = this.state.folderId.touched;
    if (folder === 'Choose a folder' || touched === false) {
      return 'Folder is required'
    } 
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const note = {
      name: this.state.name.value,
      content: this.state.content.value,
      folderId: this.state.folderId.value,
      modified: new Date(),
    }

    fetch('http://localhost:9090/notes', {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'content-type' : 'application/json'
      }
    })
    .then(r => {
      if(!r.ok) {
        throw new Error('Could not create new note, try again later.')
      }
      return r.json()
    })
    .then(data => {
      this.setState({error: null});
      this.context.addNote(data)
      this.props.history.push(`/note/${data.id}`)
    })
    .catch(err => this.setState({error: err.message}))
  }

  render() {
    return (
      <form className='addNoteForm'>
        <h2>Add Note</h2>
        <div>
          <label htmlFor='noteName'>Name: </label>
          <input
            type='text'
            className='noteNameInput'
            id='noteName'
            defaultValue='New Note'
            onChange={e => this.updateName(e.target.value)}
            required
          />
        </div>
        {this.state.name.touched && (
          <ValidationError message={this.validateName()}/>
        )}
        <div>
        <label>Folder: </label>
          <select id='selectFolder' onChange={e => this.updateFolderId(e.target.value)} required>
            <option value={null}>Choose a folder</option>
            {this.context.folders.map(folder => 
              <option key={folder.id} value={folder.id}>
              {folder.name}
              </option>  
            )}
          </select>
        </div>
        <ValidationError message={this.validateFolder()}/>
        <div>
        <label htmlFor='content'>Content: </label>
          <input
            type='text'
            className='noteContent'
            id='content'
            placeholder='Enter note content here.'
            onChange={e => this.updateContent(e.target.value)}
          />
        </div>
        <div className='noteFormButtons'>
          <button onClick={e => this.handleClickCancel(e)}>Cancel</button>
          <button 
            onClick={e => this.handleSubmit(e)}
            disabled={
              this.validateName() ||
              this.validateFolder()
            }
            >
            Create Note
          </button>
        </div>
        {this.state.error && (
          <p>{this.state.error}</p>
        )}
      </form>
    )
  }
}

export default withRouter(AddNote)