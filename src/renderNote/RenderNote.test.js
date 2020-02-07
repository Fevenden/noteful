import React from 'react';
import ReactDOM from 'react-dom';
import RenderNote from './RenderNote';

describe('RenderNote component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RenderNote />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})