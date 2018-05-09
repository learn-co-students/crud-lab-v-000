import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurant.restaurantId)
    const reviewComponents = reviews.map((review, index) => {
      return <Review key={index} id={review.id} text={review.text} store={this.props.store} />
    })
    return(
      <ul>
        {reviewComponents}
      </ul>
    );
  }
};

export default Reviews;
