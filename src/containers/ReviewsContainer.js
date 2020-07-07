import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurantId} addReview={this.props.addReview} />
        <Reviews reviews={this.props.reviews} restaurantId={this.props.restaurantId} deleteReview={this.props.deleteReview} />
      </div>
    );
  }
};

const mapStateToProps = state => ({
  reviews: state.reviews
});

const mapDispatchToProps = dispatch => ({
  addReview: (formData, restaurantId) => dispatch({ type: "ADD_REVIEW", review: { text: formData, restaurantId: restaurantId } }),
  deleteReview: reviewId => dispatch({ type: "DELETE_REVIEW", id: reviewId })
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
