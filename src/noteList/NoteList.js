import React from 'react';
import { Link } from 'react-router-dom';
import RenderNote from '../renderNote/RenderNote';
import NotefulContext from '../NotefulContext';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NoteList.css';

class NoteList extends React.Component {
  static contextType = NotefulContext;

  render() {
    let notes = this.context.notes
    if (this.props.match.params.folderId !== undefined) {
      notes = this.context.notes.filter(note => 
        note.folderId === this.props.match.params.folderId
      )
    }
    return (
      <section className='noteList'>
        <ul>
          {this.props.noteErr && (
            <h2>{this.props.noteErr}</h2>
          )}
          {notes.map(note =>
            <li key={note.id}>
              <RenderNote 
                id={note.id}
                name={note.name}
                modified={note.modified}
              />
            </li>
          )}
        </ul>  
        <Link to={'/addnote'}>
          <button id='addNote'>Add Note</button>
        </Link>
      </section>
    )
  }
}

NoteList.propTypes= {
  noteErr: PropTypes.string
}

export default withRouter(NoteList)