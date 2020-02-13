import React from 'react';
import RenderFolder from '../renderFolder/RenderFolder';
import './sidebar.css';
import { Link } from 'react-router-dom'
import NotefulContext from  '../NotefulContext';
import PropTypes from 'prop-types';

class Sidebar extends React.Component{
  static contextType = NotefulContext;

  render() {
    return (
      <nav className='sidebar'>
        {this.props.folderErr && (
          <h2>{this.props.folderErr}</h2>
        )}
        <ul>
          <RenderFolder 
            className='folder'
            folders={this.context.folders}
            />
        </ul>
        <Link to='/addfolder'>
          <button id='addfolder'>
            Add Folder
          </button> 
        </Link>
      </nav>
    )
  } 
}

Sidebar.propTypes = {
  folderErr: PropTypes.string
}

export default Sidebar;