import React from 'react';
import RenderNote from '../renderNote/RenderNote';
import RenderFolder from '../renderFolder/RenderFolder'
import NotefulContext from '../NotefulContext';
import './NotePage.css';

class NotePage extends React.Component{
  static contextType = NotefulContext;

  handleButtonClick = () => {
    this.props.history.push('/')
  }
  
  render() {
    let notes = this.context.notes.filter(note => 
      note.id === this.props.match.params.noteId  
    );
    return notes.map(note => {
      let folders = this.context.folders.filter(folder => 
        folder.id === note.folderId  
      );
      return (
        <section className='notePage'>
          <nav className='sidebar'>
            <button id='goBack' onClick={this.handleButtonClick}>Go Back</button>
            <RenderFolder 
              className='folder-notePage'
              folders={folders}
            />
          </nav>
          <div className='noteSection'>
            <RenderNote
              id={note.id}
              name={note.name}
              onDeleteNote={this.handleButtonClick}
            />
            <p>{note.content}</p>
          </div>
        </section>
      )
    });
  }
}

export default NotePage