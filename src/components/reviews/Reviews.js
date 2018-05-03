import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let reviews = this.props.store.getState().reviews.filter(x => x.restaurantId === this.props.restaurantId)
    //debugger;
    return (
      <ul>
        {reviews.map((review,index)=> <Review key={index} store={this.props.store} review={review} /> )}
      </ul>
    );
  }
};

export default Reviews;
