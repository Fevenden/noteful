import React from 'react';
import ReactDOM from 'react-dom';
import RenderNote from './RenderNote';
import { BrowserRouter } from 'react-router-dom';

describe('RenderNote component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <RenderNote />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
})