import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render(){
    const reviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId).map((review, index) => {
      return <Review key={index} review={review} store={this.props.store} restaurantId={this.props.restaurantId}/>
    })
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
