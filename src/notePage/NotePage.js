import React from 'react';
import RenderNote from '../renderNote/RenderNote';
import './NotePage.css';

export default function NotePage(props) {
  let notes = props.state.notes.filter(note => 
    note.id === props.match.params.noteId  
  )
  return notes.map(note => {
    return (
      <section className='notPage'>
        <button id='goBack'>Go Back</button>
        <RenderNote 
          notes={notes}
        />
        <p>{note.content}</p>
      </section>
    )
  })
}