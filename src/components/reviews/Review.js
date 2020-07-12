import React, { Component } from 'react';
import ReviewUpdate from './ReviewUpdate';

class Review extends Component {
  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
          
          <ReviewUpdate review={review} updateReview={this.props.updateReview} />
          <button onClick={() => this.props.deleteReview(review.id)}> X </button>
        </li>
      </div>
    );
  }
};

export default Review;
