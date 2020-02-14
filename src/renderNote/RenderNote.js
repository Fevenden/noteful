import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import './RenderNote.css';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';

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
        return res.json().then(e => this.promise.reject(e))
      } else {
        return res.json()
      }
    })
    .then(() => {
      this.context.deleteNote(noteId);
      this.props.onDeleteNote(noteId);
      // console.log(this.context.notes)
    })
    .catch(err => {
      console.log(err);
    })
  };

  render(){
    console.log(new Date(this.props.modified))
    return (
      <div className='note'>
        <Link to={`/note/${this.props.id}`}>
          <h2>{this.props.name}</h2>
        </Link>
        <p>Created on {format(new Date(this.props.modified), 'MMMM do, yyyy')}</p>
        <button id='deleteNote' onClick={this.handleClickDelete}>delete note</button>
      </div>
    )
  };
}

RenderNote.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteNote: PropTypes.func 
}