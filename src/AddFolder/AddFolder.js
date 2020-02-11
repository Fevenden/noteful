import React from 'react'
import { withRouter } from 'react-router-dom';
import NotefulContext from '../NotefulContext';

class AddFolder extends React.Component {
  static contextType = NotefulContext;

  state = {
    name: ''
  }

  updateName(name) {
    this.setState({name: name});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const folder = {
      name: this.state.name,
    }

    console.log(folder);
    e.preventDefault();
    fetch('http://localhost:9090/folders', {
      method: 'POST',
      body: JSON.stringify(folder),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(r => r.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <form className="addFolderForm">
        <h2>Add A Folder</h2>
        <label htmlFor='name'>Name: </label>
        <input 
          type='text'
          className='nameInput'
          id='name'
          name='nameFolder'
          defaultValue='New Form'
          onChange={e => this.updateName(e.target.value)}
        />
        <button id='cancel' type='button'>Cancel</button>
        <button id='submitNewFolder' onClick={e => this.handleSubmit(e)}>Create</button>
      </form>
    )
  }
}

export default withRouter(AddFolder)