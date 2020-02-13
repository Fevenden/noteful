import React from 'react';
import ReactDOM from 'react-dom';
import AddNote from './AddNote';
import { BrowserRouter } from 'react-router-dom';

describe('AddNote Component', () => {
  it('renders wihtout crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <AddNote />
      </BrowserRouter>, 
      div);
    ReactDOM.unmountComponentAtNode(div);
  })
})