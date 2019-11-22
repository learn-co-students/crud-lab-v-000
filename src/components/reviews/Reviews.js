import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => {
    const filteredReviews = this.props.reviews.filter(review => review.restaurantId == this.props.restaurantId)
    return filteredReviews.map(review => <Review key={review.id} review={review} deleteReview={this.props.deleteReview}/>)
  }

  render() {
    console.log('in the reviews component', this.props.reviews)
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;
