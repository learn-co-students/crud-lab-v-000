import React, { Component } from 'react';
import Review from './Review';

const e = React.createElement

class Reviews extends Component {
  render() {
    const rid = this.props.restaurantId

    const reviews = this.props.store.getState().reviews
    const restReviews = reviews.filter(({restaurantId}) => {
      return restaurantId === rid
    })

    const output = restReviews.map((review, i) => e(Review, {review, key: i, store: this.props.store}))

    return (
      <ul className="list-group mb-3" >
        {output}
      </ul>
    );
  }
};

export default Reviews;