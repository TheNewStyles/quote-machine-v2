import React from 'react';
import ReactDOM from 'react-dom';

import Author from '../Components/Author';

describe('<Author />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Author />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correct author passed in as prop', () => {
    const div = document.createElement('div');
    const expected = "TEST_AUTHOR";
    ReactDOM.render(<Author author={expected} />, div);
    expect(div.firstChild.textContent).toEqual(expected);
    ReactDOM.unmountComponentAtNode(div);
  });
});