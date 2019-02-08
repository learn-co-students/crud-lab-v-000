import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {






  render() {
  	const reviews = this.props.reviews.filter(r => r.restaurantId === this.props.restaurant.id)

		const renderReviews =  reviews.map((r) => 
					 <Review delete={this.props.delete} key={r.id} review={r} />
				)
    return (
      <ul>
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews;