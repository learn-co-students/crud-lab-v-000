import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {
	render() {
		// debugger;
		return (
			<div>
				<ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview} />
				<Reviews restaurantId={this.props.restaurant.id} reviews={this.props.reviews} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { reviews: state.reviews };
};

const mapDispatchToProps = (dispatch) => ({
	addReview: (formData) => dispatch({ type: 'ADD_REVIEW', formData })
	// 	// , deleteRestaurant: (id) => dispatch({ type: 'DELETE_RESTAURANT', id })
});

// export default ReviewsContainer;
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
