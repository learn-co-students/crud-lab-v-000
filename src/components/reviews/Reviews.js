import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const { store } = this.props;
    const restaurantReviews = store.getState().reviews.filter(review => {
      return review.restaurantId === this.props.restaurantId;
    }).map((review, index) => {
      return <Review key={index} text={review.text} store={store} review={review}/>
    })
    return (
      <ul>
        {restaurantReviews}
      </ul>
    );
  }
};

export default Reviews;
