import React from 'react';
import RenderNote from '../renderNote/RenderNote';
import NotefulContext from '../NotefulContext';
import { withRouter } from 'react-router-dom';
import './NoteList.css';

class NoteList extends React.Component {
  static contextType = NotefulContext;

  render() {
    console.log(this.props);
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
        <button id='addNote' onClick={this.context.addNote}>Add Note</button>
      </section>
    )
  }
}

export default withRouter(NoteList)