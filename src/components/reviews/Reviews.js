import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => {
    return this.props.reviews.map(review => {
      console.log(review.restaurantId, this.props.restaurantId)
      if (review.restaurantId === this.props.restaurantId) {
        return (<Review key={review.id}
        review={review}
        restaurantId={review.restaurantId}
        delete={this.props.delete} />
      )}
    })
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
