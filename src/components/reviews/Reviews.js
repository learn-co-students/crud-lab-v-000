import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  // renderReviews = () => {
  //   // return this.props.reviews.map(review => <Review review={review} key={review.id} deleteReview={this.props.deleteReview}  />)
  //   return this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
  // }

  render() {
    let reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)

    let reviewComponents = reviews.map(review => <Review review={review} key={review.id} deleteReview={this.props.deleteReview} />)
 
    return (
      <ul>
        {reviewComponents}
      </ul>
    );
  }
};

export default Reviews;