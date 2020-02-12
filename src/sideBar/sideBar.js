import React from 'react';
import RenderFolder from '../renderFolder/RenderFolder';
import './sidebar.css';
import { Link } from 'react-router-dom'
import NotefulContext from  '../NotefulContext';

class Sidebar extends React.Component{
  static contextType = NotefulContext;

  render() {
    return (
      <nav className='sidebar'>
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

export default Sidebar;