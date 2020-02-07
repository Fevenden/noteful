import React from 'react';
import ReactDOM from 'react-dom';
import RenderFolder from './RenderFolder';

describe('RenderFolder component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RenderFolder />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})