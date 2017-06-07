import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const restaurantReviews = this.props.store.getState().reviews.filter( review =>
    review.restaurantId === this.props.restaurantId
    )

    let reviews = restaurantReviews.map((review, idx) => {
      return <Review 
      review={ review }
      key={ idx }
      restaurantId={ review.restaurantId }
      store={ this.props.store }/>
    })

    return(
      <ul>
        { reviews }
      </ul>
    );
  }
};

export default Reviews;