import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
  	const reviews = this.props.restaurant.reviews.map((review)=> {
			return <Review restaurantId={this.props.restaurant.id} review={review} store={this.props.store}/>
  	});

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;