import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {//
    const associatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)

    return (
      <ul>
        {associatedReviews.map(review => <Review key={review.id} deleteReview={this.props.deleteReview} review={review}/>)}
      </ul>
    );
  }
};

export default Reviews;

// You will also need to create a reviews resource. Similar to the components for Restaurant, users should
// be able to create a review that is specifically associated with the related restaurant, and those
// reviews should be displayed underneath the related restaurant.
// has review components as children
