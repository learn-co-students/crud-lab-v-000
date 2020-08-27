import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  // Somewhere, I need to match the reviews to the restaurant, depending on the restaurantID.
  // But, how and where do I do that? Right now, Reviews has a restaurantId prop.
  // Maybe that needs to be done in the parent component, ReviewsContainer?
  render() {
    return (
      <ul>
        <h4>Reviews:</h4>
        {this.props.reviews.map(
          // review => <Review {...review} />
          review => <Review key={review.id} review={review} />
        )}
      </ul>
    );
  }
};

export default Reviews;