import React, { Component } from 'react';

class Review extends Component {
  handleOnClick = ( event ) => {
    event.preventDefault()
    this.props.deleteReview(this.props.review.id)

  }
  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={this.handleOnClick}> X </button>
      </div>
    );
  }

};

export default Review;
