import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.store.getState().reviews
          .filter(r => r.restaurantId === this.props.restaurantId)
          .map((r, i) => {
          return <Review
            key={i}
            store={this.props.store}
            review={r}/>
        })}
      </ul>
    );
  }
};

export default Reviews;
