import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    // const restaurant = this.props.store.getState().restaurants.find(restaurant => restaurant.id === this.props.restaurantId)
    // if (restaurant.reviews) {
    //   const reviewLIs = restaurant.reviews.map((review, index) => <Review key={index} restaurantId={this.props.restaurantId} review={review} store={this.props.store} />)
    //   return(<ul>{reviewLIs}</ul>);
    // } else {
    //   return(<p>No reviews yet! Be the first</p>)
    // }
    const reviewLIs = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId).map((review, index) => <Review key={index} review={review} store={this.props.store} />)
    return(
      <ul>
        {reviewLIs}
      </ul>
    );
  }
};

export default Reviews;
