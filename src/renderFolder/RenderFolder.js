import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './RenderFolder.css';

export default function RenderFolder(props) {
  return props.folders.map(folder => {
    return (
      <NavLink to={`/folder/${folder.id}`} >
        <li className={props.className} key={folder.id}>
          <h2>{folder.folder_name}</h2>
        </li>
      </NavLink>
    )
  })
}

RenderFolder.propTypes = {
  folders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    folder_name: PropTypes.string.isRequired,
  })),
  className: PropTypes.string.isRequired
};