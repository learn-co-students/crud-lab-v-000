import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
	render() {
		// debugger;
		const filterdReviews = this.props.reviews.filter((review) => {
			return review.restaurantId === this.props.restaurantId;
		});
		const reviews =
			filterdReviews &&
			filterdReviews.map((review) => (
				<Review key={review.id} deleteReview={this.props.deleteReview} review={review} />
			));

		return <ul>{reviews}</ul>;
	}
}

export default Reviews;
