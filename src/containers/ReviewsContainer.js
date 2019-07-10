import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {
	render() {
		return (
			<div>
				<ReviewInput />
				<Reviews />
			</div>
		);
	}
}

// const mapStateToProps = (state) => {
// 	return { restaurants: state.restaurants };
// };

// const mapDispatchToProps = (dispatch) => ({
// 	addReview: (formData) => dispatch({ type: 'ADD_RESTAURANT', payload: formData })
// 	// , deleteRestaurant: (id) => dispatch({ type: 'DELETE_RESTAURANT', id })
// });

// export default ReviewsContainer;
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
