import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReview = () => 
    this.props.reviews.map(review => {
      if (review.restaurantId === this.props.restaurantId) {
        return <Review review={review} key={review.id} delete={this.props.delete} />
      }
    })
  

  render() {
    return (
      <ul>
        All Reviews
        {this.renderReview()}
      </ul>
    );
  }
};

export default Reviews;