import React from 'react';
import ReactDOM from 'react-dom';
import QuoteBox from '../Components/QuoteBox';


describe('<QuoteBox />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<QuoteBox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

