import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const associatedReviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const reviews = associatedReviews.map((review, index) => {
      return <Review key={index} store={this.props.store} review={review}/>
    })

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
