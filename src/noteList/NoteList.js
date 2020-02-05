import React from 'react';
import RenderNote from '../renderNote/RenderNote';
import './NoteList.css';

export default function Notelist(props) {
  let notes = props.state.notes
  if (props.match !== undefined) {
    notes = props.state.notes.filter(note => 
      note.folderId === props.match.params.folderId
    )
  }
  return (
    <section className='noteList'>  
      <button id='goBack'>Go Back</button>
        <RenderNote 
          notes={notes}
        />
      <button id='addNote'>Add Note</button>
    </section>
  )
}