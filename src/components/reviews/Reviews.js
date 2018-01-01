import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
      // let filteredReviews = (this.props.store && this.props.store.getState())? (this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId)) : [];

      let filteredReviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId);
    return (
      <ul>
          {filteredReviews.map((review)=>{
              return <Review review={review} store={this.props.store}/>
          })}
      </ul>
    );
  }
};

export default Reviews;