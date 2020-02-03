import React from 'react';
import './NoteList.css';

export default function Notelist(props) {
  const notes = props.state.notes.map(note => {
    console.log(note);
    return (
      <li key={note.id}>
        <h2>{note.name}</h2>
      </li>
    )
  })
  return (
  <ul>
    {notes}
  </ul>
  )
}