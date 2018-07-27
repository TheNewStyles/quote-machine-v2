import React, { Component } from 'react'

import { QuoteText } from './QuoteText'
import { Author } from './Author';
import { NewQuoteButton } from './NewQuoteButton';
import { TweetButton } from './TweetButton';

import '../Styles/QuoteBox.css'

export class QuoteBox extends Component {
    constructor(props){
        super(props);
        this.state = {          
          quotes: new Map([
            [0, `I'm American, honey. Our names don't mean shit. - Butch Coolidge`],
            [1, `Don't be a square - Mia Wallace`],
            [2, `I’ma get medieval on your ass. - Marsellus Wallace`],
            [3, `Did you just order a five-dollar shake? - Vincent Vega`],
            [4, `I'm tryin' real hard to be the shepherd. - Jules Winnfield`],
            [5, `All right, everybody be cool, this is a robbery! - Honey Bunny`],
            [6, `You're going to give her an injection of adrenaline directly to her heart. -  Lance`],
            [7, `Pig! - Jody`],
            [8, `I don't need you to tell me how ****ing good my coffee is, okay? - Jimmy`],
            [10, `I’m Winston Wolfe. I solve problems. - The Wolf`],
            [11, `Five long years, he wore this watch up his ass. - Captain Koons`]
          ]),
          currentIndex: this.getRandomNumber(),
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleTweet = this.handleTweet.bind(this);
    }

    getRandomNumber() {
      return Math.floor(Math.random() * 12);
    }

    getQuote(index) {
      return this.state.quotes.get(index).split('-')[0];
    }

    getAuthor(index) {
      return `- ` + this.state.quotes.get(index).split('-')[1];
    }

    handleClick(e) {
      //clear quote text
      //clear author
      //set quote = getQuote
      //set author = getAuthor
    }

    handleTweet(e) {

    }

    render() {
        return (
            <div id="quote-box">
                <div id="quote-section">
                    <QuoteText text={this.getQuote(this.state.currentIndex)} />
                    <Author author={this.getAuthor(this.state.currentIndex)} />
                </div>
                <div id="button-section">
                    <NewQuoteButton onClick={this.handleClick} />
                    <TweetButton onClick={this.handleTweet} /> 
                </div>                     
            </div>   
        )
    }
}

export default QuoteBox
