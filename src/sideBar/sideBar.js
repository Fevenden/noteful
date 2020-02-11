import React from 'react';
import RenderFolder from '../renderFolder/RenderFolder';
import './sidebar.css';
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
        <button id='addfolder' onClick={this.context.addFolder}>
          Add Folder
        </button> 
      </nav>
    )
  } 
}

export default Sidebar;