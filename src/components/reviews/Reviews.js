import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const filter = this.props.store.getState().reviews.filter((review) => review.restaurantId === this.props.restaurantId)
    const reviews = filter.map((review, index) => {
      return <Review key={index} review={review} text={review.text} id={review.id} store={this.props.store} restaurantId={this.props.restaurantId}/>
    })
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
