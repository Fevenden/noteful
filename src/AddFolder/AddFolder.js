import React from 'react'
import { withRouter } from 'react-router-dom';
import NotefulContext from '../NotefulContext';

class AddFolder extends React.Component {
  static contextType = NotefulContext;

  state = {
    name: 'New Folder'
  }

  updateName(name) {
    this.setState({name: name});
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
    .then(r => r.json())
    .then(data => {
      this.context.addFolder(data);
      this.props.history.push('/')  ;
    })
  }
  
  handleClickCancel = (e) => {
    this.props.history.push('/')
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
        <button id='cancel' type='button' onClick={e => this.handleClickCancel(e)}>Cancel</button>
        <button id='createNewFolder' onClick={e => this.handleSubmit(e)}>Create</button>
      </form>
    )
  }
}

export default withRouter(AddFolder)