import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId).map((review, index) => {
      return <Review 
                review={review}
                key={review.id}
                store={this.props.store}
              />
    })
    debugger;
    return (
      <div>
        <h5>Reviews:</h5>
        <ul>
          {reviews}
        </ul> 
      </div>

    );
  }
};

export default Reviews;