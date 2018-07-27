import React, { Component } from 'react'

import { QuoteText } from './QuoteText'
import { Author } from './Author';
import { NewQuoteButton } from './NewQuoteButton';
import { TweetButton } from './TweetButton';

import '../Styles/QuoteBox.css'

export class QuoteBox extends Component {
  render() {
    return (
        <div id="quote-box">
            <div id="quote-section">
                <QuoteText />
                <Author />
            </div>
            <div id="button-section">
                <NewQuoteButton />
                <TweetButton /> 
            </div>                     
        </div>   
    )
  }
}

export default QuoteBox
