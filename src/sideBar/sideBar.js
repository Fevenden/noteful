import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar(props) {
  const folders = props.state.folders.map(folder => {
    console.log(folder)
    return (
      <li key={folder.id}>
        <h2>{folder.name}</h2>
      </li>
    )
  })
  return (
    <nav className='Nav'>
      <ul>
        {folders}
      </ul>
    </nav>
  )
}