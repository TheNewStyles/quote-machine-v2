import React from 'react';
import ReactDOM from 'react-dom';

import NewQuoteButton from '../Components/NewQuoteButton';

describe('<NewQuoteButton />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewQuoteButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewQuoteButton />, div);
    const newQuoteButton = div.firstChild;
    const expected = "New Quote";
    expect(newQuoteButton.textContent).toEqual(expected);
    ReactDOM.unmountComponentAtNode(div);
  });  
});