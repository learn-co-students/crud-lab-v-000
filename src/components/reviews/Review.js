import React, { Component } from 'react';

class Review extends Component {


  handleOnClick = (event) => {
    event.preventDefault()
    const reviewId = this.props.review.id
    this.props.deleteReview(reviewId)
  }

  render() {

    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={this.handleOnClick}> X </button>
      </div>
    );
  }

};

export default Review;
