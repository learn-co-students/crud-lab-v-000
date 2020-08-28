import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review, deleteReview } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={() => deleteReview(review.id)}> X </button>
        {/* As a bonus, I should try to implement the Update functionality mentioned in the README. */}
      </div>
    );
  }

};

export default Review;
