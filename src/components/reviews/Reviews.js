import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const reviewsComponent = this
    const filteredReviewArr = this.props.store.getState().reviews.filter((review) => {
      return review.restaurantId === reviewsComponent.props.restaurantId
    })

    const reviews = filteredReviewArr.map((review, index) => {
      return <Review review={review} store={this.props.store} key={index} restaurantId={this.props.restaurantId}/>
    })

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
