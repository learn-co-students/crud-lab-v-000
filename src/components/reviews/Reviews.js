import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
	render() {
		debugger;
		const filterdReviews = this.props.reviews.filter((review) => {
			return review.restaurantId === this.props.restaurantId;
		});
		const reviews =
			filterdReviews &&
			filterdReviews.map((review) => (
				<li key={review.id}>
					<Review review={review} />
				</li>
			));

		return <ul>{reviews}</ul>;
	}
}

export default Reviews;
