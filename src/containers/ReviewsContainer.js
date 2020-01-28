import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    const filteredReviews = this.props.reviews.filter(rev => rev.restaurantId === this.props.restaurant.id)
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview}/>
        <Reviews restaurant={this.props.restaurant} reviews={filteredReviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { reviews: state.reviews }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (review) => dispatch({type: 'ADD_REVIEW', review: review }),
    deleteReview: (reviewId) => dispatch({type: 'DELETE_REVIEW', reviewId: reviewId})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
