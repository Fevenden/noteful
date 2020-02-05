import React from 'react';
import { NavLink } from 'react-router-dom';
import './RenderFolder.css';

export default function RenderFolder(props) {
  return props.folders.map(folder => {
    return (
      <NavLink to={`/folder/${folder.id}`} >
        <li className={props.className} key={folder.id}>
          <h2>{folder.name}</h2>
        </li>
      </NavLink>
    )
  })
}