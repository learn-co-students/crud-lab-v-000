import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let reviews = this.props.store.getState().reviews.filter((review) => {
      return review.restaurantId === this.props.restaurantId
    })

    let reviewsComponents = reviews.map((review) => {return <Review key={review.id} review={review} store={this.props.store} />})
    return (
      <ul>
        {reviewsComponents}
      </ul>
    );
  }
};

export default Reviews;
