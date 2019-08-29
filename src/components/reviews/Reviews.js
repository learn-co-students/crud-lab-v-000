import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  listReviews = () => {
    const relatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    return relatedReviews.map((review) => {
    return (
      <Review 
         key={review.id} 
         review={review} 
         deleteReview={this.props.deleteReview}
       />
     )
   })}

  render() {
    return (
      <ul>
        {this.props.reviews ? this.listReviews(): null}
      </ul>
    );
  }
};

export default Reviews;


