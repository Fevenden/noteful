import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from'react-router-dom';
import AddFolder from './AddFolder';

describe('AddFolder component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AddFolder />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
