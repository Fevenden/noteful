import React from 'react';
import NotefulContext from '../NotefulContext';
// import { withRouter } from 'react-router-dom';
import ValidationError from '../ValidationError'

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
      folderId: this.state.folderId.value
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
        {this.state.name.touched && (
          <ValidationError message={this.validateName()}/>
        )}
        <label>Folder: </label>
        <select id='selectFolder' onChange={e => this.updateFolderId(e.target.value)} required>
          <option value={null}>Choose a folder</option>
          {this.context.folders.map(folder => 
            <option key={folder.id} value={folder.id}>
            {folder.name}
             </option>  
          )}
        </select>
        <ValidationError message={this.validateFolder()}/>
        <label htmlFor='content'>Content: </label>
        <input
          type='text'
          className='noteContent'
          id='content'
          placeholder='Enter note content here.'
          onChange={e => this.updateContent(e.target.value)}
        />
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
      </form>
    )
  }
}

export default AddNote