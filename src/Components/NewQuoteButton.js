import React, { Component } from 'react'

import '../Styles/NewQuoteButton.css'

export class NewQuoteButton extends Component {
  render() {
    return (
        <button id="new-quote" className="btn" onClick={this.props.onClick}>
            New Quote
        </button>
    )
  }
}

export default NewQuoteButton
