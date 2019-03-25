import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review, reviewId, deleteReview } = this.props
    return (
      <div>
        <li>
          {review}
          <button onClick={()=>deleteReview(reviewId)}> X </button>
        </li>
      </div>
    );
  }

};

export default Review;
