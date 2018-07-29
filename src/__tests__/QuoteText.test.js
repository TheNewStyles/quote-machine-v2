import React from 'react';
import ReactDOM from 'react-dom';
import QuoteText from '../Components/QuoteText';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuoteText />, div);
  ReactDOM.unmountComponentAtNode(div);
});
