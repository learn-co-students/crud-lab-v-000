import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => {
    return this.props.reviewsForRestaurant.map(review => {
        return ( <Review id={review.id} key={review.id} text={review.text} restaurantId={review.restaurantId} deleteReview={this.props.deleteReview} />
          )
    });
  }
  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews; 