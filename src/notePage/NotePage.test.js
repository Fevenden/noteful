import React from 'react';
import ReactDOM from 'react-dom';
import NotePage from './NotePage';
import { BrowserRouter } from 'react-router-dom';

describe('NotePage component', () => {
  it('renders without crashing', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <NotePage />
      </BrowserRouter>, 
      div);
    ReactDOM.unmountComponentAtNode(div);
  }) 
})