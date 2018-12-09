import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review, restaurantId, deleteReview } = this.props;
    return (
      <li>
        <span>
          {review.text}
        </span>
        <button onClick={() => deleteReview(review.id)} > X </button>
      </li>
    );
  }

}

export default Review;
