import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    return (
      <div>
        <ul>{this.props.myReviews.map(review => <Review key={review.id} review={review} deleteReview={this.props.deleteReview}/>)}</ul>
      </div>
    );
  }
};

export default Reviews;

// <Review key={index} review={review} />)
// <ul>
//   {this.props.reviews.map(review => <Review key={review.id} review={review} />)}
// </ul>
