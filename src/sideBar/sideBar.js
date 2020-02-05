import React from 'react';
import RenderFolder from '../renderFolder/RenderFolder';
import './sidebar.css';

export default function Sidebar(props) {
  return (
    <nav className='sidebar'>
      <ul>
        <RenderFolder 
          className='folder'
          folders={props.state.folders}
        />
      </ul>
      <button id='addfolder'>
        Add Folder
      </button> 
    </nav>
  )
}