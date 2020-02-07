import React from 'react';
import ReactDOM from 'react-dom';
import NoteList from './NoteList';

describe('NoteList component', () => {
  it('renders without crashing', () => {
    const dov = document.createElement('div');
    ReactDOM.render(<NoteList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})