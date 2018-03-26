import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  

  //cannot read property map of undefined...
  //so reviews don't seem to be passed in properly
  render() {
    const resReviews = this.props.store.getState().reviews.filter(r => r.restaurantId === this.props.restaurantId)
    const restaurantReviews = resReviews.map((r, index) => {
      return <Review store={this.props.store} review={r} key={index} />
    })
   

    return (
      <ul>
        {restaurantReviews}
      </ul>
    );
  }
};

export default Reviews;

