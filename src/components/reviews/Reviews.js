import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let filteredReviews = this.props.reviews.filter(review => {
      return review.restaurantId == this.props.restaurantId
    })

    let reviews = filteredReviews.map(review => {
      return <Review review={review} key={review.id} deleteReview={this.props.deleteReview}/>
    })

    // let reviews = this.props.reviews.map(review => {
    //   return <Review review={review} key={review.id} deleteRestaurant={this.props.deleteRestaurant}/>
    // })
    return (
      <ul>
        Reviews
        {reviews}
      </ul>
    );
  }
};

export default Reviews;