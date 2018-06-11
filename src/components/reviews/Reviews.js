import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component { 
  render() {
    const reviews = this.props.store.getState().reviews.filter(
                    review => this.props.restaurantId === review.restaurantId
                    ).map((review, index) => {
                      return <Review key={index} id={review.id} review={review} store={this.props.store} />
                    })
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;