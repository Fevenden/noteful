import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar(props) {
  const folders = props.state.folders.map(folder => {
    console.log(folder)
    return (
      <li className='folder' key={folder.id}>
        <h2>{folder.name}</h2>
      </li>
    )
  })
  return (
    <nav className='sidebar'>
      <ul>
        {folders}
      </ul>
      <button id='addfolder'>
        Add Folder
      </button> 
    </nav>
  )
}