import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews() {
    return this.props.reviews.map(review => {
      if(review.restaurantId === this.props.restaurantId) {
       return <Review deleteReview={this.props.deleteReview} review={review} key={review.id}/>
      }
      // return <li key={restaurant.id}>{restaurant.text}</li>
      // key={restaurant.id} text={restaurant.text}
    })
  }

  render() {
    return (
      <ul>
        Reviews
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;