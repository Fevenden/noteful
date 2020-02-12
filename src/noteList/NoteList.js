import React from 'react';
import { Link } from 'react-router-dom';
import RenderNote from '../renderNote/RenderNote';
import NotefulContext from '../NotefulContext';
import { withRouter } from 'react-router-dom';
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
          {notes.map(note =>
            <li key={note.id}>
              <RenderNote 
                id={note.id}
                name={note.name}
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

export default withRouter(NoteList)