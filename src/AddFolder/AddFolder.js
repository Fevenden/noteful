import React from 'react'
import NotefulContext from '../NotefulContext';
import ValidationError from '../ValidationError';
import { withRouter } from 'react-router-dom';
 
class AddFolder extends React.Component {
  static contextType = NotefulContext;

  state = {
    name: 'New Folder',
    toched: false,
    error: null
  }

  updateName(name) {
    this.setState({name: name, touched: true});
  }

  validateName() {
    const name = this.state.name
    if (name.length === 0) {
      return 'A Name is required';
    } else if (name.length < 3)
      return 'Name must be at least 3 characters long.'
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const folder = {
      name: this.state.name,
    }

    fetch('http://localhost:9090/folders', {
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
        <label htmlFor='folderName'>Name: </label>
        <input 
          type='text'
          className='folderNameInput'
          id='folderName'
          name='nameFolder'
          defaultValue='New Folder'
          onChange={e => this.updateName(e.target.value)}
        />
        {this.state.touched && (
          <ValidationError message={this.validateName()}/>
        )}
        <button id='cancel' type='button' onClick={e => this.handleClickCancel(e)}>Cancel</button>
        <button id='createNewFolder' onClick={e => this.handleSubmit(e)} disabled={this.validateName()}>Create</button>
        {this.state.error && (
          <p>{this.state.error}</p>
        )}
      </form>
    )
  }
}

export default withRouter(AddFolder)