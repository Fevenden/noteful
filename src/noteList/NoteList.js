import React from 'react';
import RenderNote from '../renderNote/RenderNote';
import NotefulContext from '../NotefulContext';
import './NoteList.css';

class NoteList extends React.Component {
  static contextType = NotefulContext;

  render() {
    let notes = this.context.notes
    if (this.props.match !== undefined) {
      notes = this.context.notes.filter(note => 
        note.folderId === this.props.match.params.folderId
      )
    }
    return (
      <section className='noteList'>  
        <ul>
          <RenderNote 
            notes={notes}
            />
        </ul>
        <button id='addNote'>Add Note</button>
      </section>
    )
  }
}

export default NoteList