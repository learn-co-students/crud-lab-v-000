import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const filteredReviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const renderedReviews = filteredReviews.map((review,index) => {
      return <Review store={this.props.store} review={review} key={index} /> 
    })
    
    return (
      <ul>
        {renderedReviews}
      </ul>
    );
  }
};

export default Reviews;