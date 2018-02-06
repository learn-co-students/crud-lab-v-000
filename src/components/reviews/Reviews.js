import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.store.getState().reviews.filter(reviews =>
          reviews.restaurantId === this.props.restaurantId)
          .map((review, index) => <Review review={review} key={index} store={this.props.store}/>)}
      </ul>
    );
  }
};

export default Reviews;
