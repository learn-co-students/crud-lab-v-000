import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {
	render() {
		let restaurantId = this.props.restaurant.id;
		console.log(restaurantId);

		return (
			<div>
				<ReviewInput addReview={this.props.addReview} />
				<Reviews />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { reviews: state.reviews };
};

const mapDispatchToProps = (dispatch) => ({
	addReview: (formData) => dispatch({ type: 'ADD_REVIEWS', payload: formData })
	// 	// , deleteRestaurant: (id) => dispatch({ type: 'DELETE_RESTAURANT', id })
});

// export default ReviewsContainer;
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
