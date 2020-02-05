import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar(props) {
  const folders = props.state.folders.map(folder => {
    return (
      <li className='folder' key={folder.id}>
        <NavLink to={`/folder/${folder.id}`} >
          <h2>{folder.name}</h2>
        </NavLink>
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