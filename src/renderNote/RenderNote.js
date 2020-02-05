import React from 'react';
import { Link } from 'react-router-dom';
import './RenderNote.css';

export default function RenderNote(props) {
	return props.notes.map(note =>{
    return (
      <li className='note' key={note.id}>
        <Link to='/note/:noteId'>
          <h2>{note.name}</h2>
        </Link>
        <button id='deleteNote'>delete note</button>
      </li>
    )
	});
}