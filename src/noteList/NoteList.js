import React from 'react';
import { Link } from 'react-router-dom';
import './NoteList.css';

export default function Notelist(props) {
  let notes = null; 
  if (props.match === undefined) {
    notes = props.state.notes;
    } else {
    notes = props.state.notes.filter(note => 
      note.folderId === props.match.params.folderId
    )
  }
  let notesMaped = notes.map(note =>{
    return (
      <li className='note' key={note.id}>
        <Link to='/note/:noteId'>
          <h2>{note.name}</h2>
        </Link>
        <button id='deleteNote'>delete note</button>
      </li>
    )
  });
  return (
    <section className='noteList'>  
      <ul>
        {notesMaped}
      </ul>
      <button id='addNote'>Add Note</button>
    </section>
  )
}