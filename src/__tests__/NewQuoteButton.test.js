import React from 'react';
import ReactDOM from 'react-dom';
import NewQuoteButton from '../Components/NewQuoteButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewQuoteButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
