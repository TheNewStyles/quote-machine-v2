import React, { Component } from 'react'

import twitter from '../Images/twitter-logo.svg'

import '../Styles/TweetButton.css'
import '../Styles/Buttons.css'

export class TweetButton extends Component {
  render() {
    return (
        <button className="btn" id="tweet">
            <img  src={twitter} alt="twitter icon" onClick={this.props.onClick}/>
            <a href={"https://twitter.com/intent/tweet?text="+this.props.tweet}>Share</a>            
        </button>
    )
  }
}

export default TweetButton
