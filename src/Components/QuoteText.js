import React, { Component } from 'react'

export class QuoteText extends Component {
  render() {
    return (
        <div id="text">
            {this.props.quote}
        </div>
    )
  }
}

export default QuoteText;