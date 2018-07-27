import React, { Component } from 'react'

import twitter from '../Images/twitter-logo.svg'

import '../Styles/TweetButton.css'
import '../Styles/Buttons.css'

export class TweetButton extends Component {
  render() {
    return (
        <button className="btn" id="tweet">
            <img  src={twitter} alt="twitter icon"/>
            Share
        </button>
    )
  }
}

export default TweetButton
