import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let reviews = this.props.store.getState().reviews.filter(r => r.restaurantId === this.props.restaurantId);
    reviews = reviews.map((r, index) => <Review key={index} review={r} store={this.props.store}/>)

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
