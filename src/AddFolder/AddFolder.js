import React from 'react'
import NotefulContext from '../NotefulContext';
import ValidationError from '../ValidationError';
import { withRouter } from 'react-router-dom';
import './AddFolder.css'
 
class AddFolder extends React.Component {
  static contextType = NotefulContext;

  state = {
    folder_name: '',
    toched: false,
    error: null
  }

  updateName(name) {
    this.setState({folder_name: name, touched: true});
  }

  validateName() {
    const name = this.state.folder_name
    if (name.length === 0) {
      return 'A Name is required';
    } else if (name.length < 3)
      return 'Name must be at least 3 characters long.'
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const folder = {
      folder_name: this.state.folder_name,
    }

    fetch('http://localhost:8000/api/folders', {
      method: 'POST',
      body: JSON.stringify(folder),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(r => {
      if (!r.ok) {
        throw new Error('Could not create new folder, try again later.')
      }
      return r.json()
    })
    .then(data => {
      this.setState({error: null});
      this.context.addFolder(data);
      this.props.history.push('/');
    })
    .catch(err => this.setState({error: err.message}))
  }
  
  handleClickCancel = (e) => {
    this.props.history.push('/');
  }

  render() {
    return (
      <form className="addFolderForm">
        <h2>Add Folder</h2>
        <div className='folderFormInput'>
          <label htmlFor='folderName'>Name: </label>
          <input 
            type='text'
            className='folderNameInput'
            id='folderName'
            name='nameFolder'
            placeholder='New Folder'
            onChange={e => this.updateName(e.target.value)}
            />
          </div>
          {this.state.touched && (
            <ValidationError message={this.validateName()}/>
          )}
        <div className='folderFormButtons'>
          <button id='cancel' type='button' onClick={e => this.handleClickCancel(e)}>Cancel</button>
          <button id='createNewFolder' onClick={e => this.handleSubmit(e)} disabled={this.validateName()}>Create</button>
        </div>
        {this.state.error && (
          <p>{this.state.error}</p>
        )}
      </form>
    )
  }
}

export default withRouter(AddFolder)