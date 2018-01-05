import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    debugger
    let reviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId)
    if(reviews) reviews = reviews.map((review, index)=> <Review key={index} store={this.props.store} review={review} />)
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;