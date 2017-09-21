import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.restaurant.reviews.map((review, index) => {
      return <Review review={review} key={index} restaurant={this.props.restaurant} dispatch={this.props.store.dispatch} />
    });
    return(
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
