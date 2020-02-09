import React from 'react';
import { Link } from 'react-router-dom';
import './RenderNote.css';
import NotefulContext from '../NotefulContext';

export default class RenderNote extends React.Component {
  static defaultProps ={
    onDeleteNote: () => {},
  };

  static contextType = NotefulContext;

  handleClickDelete = (e) => {
    e.preventDefault();
    const noteId = this.props.id;
    
    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(res => {
      if (!res.ok) {
        return res.json().then(e => this.propsise.reject(e))
      } else {
        return res.json()
      }
    })
    .then(() => {
      this.context.deleteNote(noteId);
      this.props.onDeleteNote(noteId);
    })
    .catch(err => console.log(err))
  };

  render(){
    return (
      <div className='note'>
        <Link to={`/note/${this.props.id}`}>
          <h2>{this.props.name}</h2>
        </Link>
        <button id='deleteNote' onClick={this.handleClickDelete}>delete note</button>
      </div>
    )
  };
}