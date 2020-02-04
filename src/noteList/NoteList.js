import React from 'react';
import './NoteList.css';

export default function Notelist(props) {
  const notes = props.state.notes.map(note => {
    console.log(note);
    return (
      <li className='note' key={note.id}>
        <h2>{note.name}</h2>
        <button id='deleteNote'>delete note</button>
      </li>
    )
  })
  return (
    <section className='noteList'>  
      <ul>
        {notes}
      </ul>
      <button id='addNote'>Add Note</button>
    </section>
  )
}