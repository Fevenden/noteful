import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import './RenderNote.css';
import NotefulContext from '../NotefulContext';
import { API_ENDPOINT} from '../config'
import PropTypes from 'prop-types';

export default class RenderNote extends React.Component {
  static defaultProps ={
    onDeleteNote: () => {},
  };

  static contextType = NotefulContext;

  handleClickDelete = (e) => {
    e.preventDefault();
    const noteId = this.props.id;
    
    fetch(API_ENDPOINT + `/api/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(() => {
      this.context.deleteNote(noteId);
      this.props.onDeleteNote(noteId);
    })
    .catch(err => {
      console.log(err);
    })
  };

  render(){
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
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDeleteNote: PropTypes.func, 
  modified: PropTypes.string,
}