import React from 'react';
import ReactDOM from 'react-dom';
import TweetButton from '../Components/TweetButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TweetButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
