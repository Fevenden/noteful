import React from 'react';
import NotefulContext from '../NotefulContext';
import { withRouter } from 'react-router-dom';

class AddNote extends React.Component {
  static contextType = NotefulContext;

  state = {
    name: 'New Note',
    content: '',
    folderId: '',
  }

  updateName(name) {
    this.setState({name: name});
  }

  updateContent(content) {
    this.setState({content: content});
  }

  updateFolderId(folderId) {
    this.setState({
      folderId: folderId
    })
  }

  handleClickCancel = (e) => {
    this.props.history.push('/')
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const note = {
      name: this.state.name,
      content: this.state.content,
      folderId: this.state.folderId
    }

    fetch('http://localhost:9090/notes', {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'content-type' : 'application/json'
      }
    })
    .then(r => r.json())
    .then(data => {
      console.log(data)
      this.context.addNote(data)
      this.props.history.push(`/note/${data.id}`)
    })
  }

  render(){
    return (
      <form className='addNoteForm'>
        <h2>Add Note</h2>
        <label htmlFor='noteName'>Name: </label>
        <input
          type='text'
          className='noteNameInput'
          id='noteName'
          defaultValue='New Note'
          onChange={e => this.updateName(e.target.value)}
          required
        />
        <label>Folder: </label>
        <select id='selectFolder' onChange={e => this.updateFolderId(e.target.value)} required>
          <option value={null}>Choose a folder</option>
          {this.context.folders.map(folder => 
            <option key={folder.id} value={folder.id}>
            {folder.name}
             </option>  
          )}
        </select>
        <label htmlFor='content'>Content: </label>
        <input
          type='text'
          className='noteContent'
          id='content'
          placeholder='Enter note content here.'
          onChange={e => this.updateContent(e.target.value)}
        />
        <button onClick={e => this.handleClickCancel(e)}>Cancel</button>
        <button onClick={e => this.handleSubmit(e)}>Create Note</button>
      </form>
    )
  }
}

export default withRouter(AddNote)