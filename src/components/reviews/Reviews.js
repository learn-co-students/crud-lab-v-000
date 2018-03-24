import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const linkedReviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId);
    
    const reviews = linkedReviews.map((review, index)=>{
      return <Review key={index} store={this.props.store} review={review} />
    })
    return (
      <div>
        <ul>
          {reviews}
        </ul>
      </div>
    );
  }
};

export default Reviews;