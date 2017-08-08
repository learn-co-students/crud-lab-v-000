import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
  const reviews = this.props.store.getState().reviews.map((review) => {
      if (review.restaurantId == this.props.restaurantId){
        return <Review store={this.props.store} review={review}/>
      }
    })

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;