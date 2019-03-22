import React, { Component } from 'react'

class Review extends Component {

  handleOnClick = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    return (
      this.props.review.id !== '' ?
        <div>
          <br />
          <li>
            {this.props.review.text}
            <label> </label><button onClick={this.handleOnClick}> x </button>
          </li>
        </div> :
        null
    )
  }
}

export default Review
