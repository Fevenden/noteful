import React from 'react';
import RenderNote from '../renderNote/RenderNote';
import RenderFolder from '../renderFolder/RenderFolder'
import './NotePage.css';

export default function NotePage(props) {
  let notes = props.state.notes.filter(note => 
    note.id === props.match.params.noteId  
  );
  return notes.map(note => {
    let folders = props.state.folders.filter(folder => 
      folder.id === note.folderId  
    );
    return (
      <section className='notePage'>
        <nav className='sidebar'>
          <button id='goBack'>Go Back</button>
          <RenderFolder 
            className='folder-notePage'
            folders={folders}
          />
        </nav>
        <div className='noteSection'>
          <RenderNote
            notes={notes}
          />
          <p>{note.content}</p>
        </div>
      </section>
    )
  });
}