import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const restId = this.props.restaurantId
    const filteredReviews = this.props.store.getState().reviews.filter(review => review.restaurantId === restId)
debugger
    const reviews = filteredReviews.map((review , index) =>{
      return <Review review={review} key={index} id={review.id} store={this.props.store} restaurantId={this.props.restaurantId}/>
    })
    return (
      <ul>
          {reviews}
      </ul>
    );
  }
};

export default Reviews;