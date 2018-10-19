import React, { Component } from 'react';

class Review extends Component {

  render() {
    console.log("review render",this.props);
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={ ()=> this.props.deleteReview(review.id)}> X </button>
      </div>
    );
  }

};

export default Review;
