import React from 'react';
import ReactDOM from 'react-dom';
import NotePage from './NotePage';

describe('NotePage component', () => {
  it('renders without crashing', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<NotePage />, div);
    ReactDOM.unmountComponentAtNode(div);
  }) 
})