import React, { Component } from 'react';
// responsible for each review
// contains the button to delete
// reviews are associated to restaurants
// text key, restaurantId key, id key
class Review extends Component {

  render() {
    const { review, deleteReview } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={() => deleteReview(review.id)}> X </button>
      </div>
    );
  }

};

export default Review;
