import React, { Component } from 'react';

class Review extends Component {

  deleteReview = () => {
    this.props.deleteReview(this.props.review)
  }

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={this.deleteReview}> Delete Review </button>
      </div>
    );
  }

};

export default Review;
