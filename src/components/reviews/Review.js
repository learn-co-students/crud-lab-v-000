import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review, deleteReview } = this.props

    return (
      <div>
        <li>
          {console.log(review.text)}
          {review.text}
        </li>
        <button onClick={()=>deleteReview(review.id)}> X </button>
      </div>
    );
  }

};

export default Review;
