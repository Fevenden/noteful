import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './sidebar';
import { BrowserRouter } from 'react-router-dom'

describe('sidebar component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
      <Sidebar /> 
    </BrowserRouter>,
    div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
