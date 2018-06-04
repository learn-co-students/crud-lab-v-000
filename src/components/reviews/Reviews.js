import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const restaurantId = this.props.restaurantId
    const reviews = this.props.store.getState().reviews
      .filter(r=> r.restaurantId === restaurantId)
        .map((review,i)=><Review restaurantId={restaurantId} review={review} store={this.props.store} key={i} />)
    
    return (
      <ul>
        { reviews }
      </ul>
    );
  }
};

export default Reviews;