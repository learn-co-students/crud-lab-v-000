import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {



  render() {

    const idReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const restaurantReviews = idReviews.map(review => {
      return  <Review deleteReview={this.props.deleteReview} key={review.id} review={review} />
    })

    return (
      <ul>
        {restaurantReviews}
      </ul>
    );
  }
};

export default Reviews;
