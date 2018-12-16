import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput
          addReview={this.props.addReview}
          restaurantId={this.props.restaurantId}
        />
        <Reviews
          reviews={this.props.reviews}
          restaurantId={this.props.restaurantId}
          deleteReview={this.props.deleteReview}
        />
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    reviews: state.reviews
  }
};

const MapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({ type: 'ADD_REVIEW', review }),
    deleteReview: reviewId => dispatch({ type: 'DELETE_REVIEW', reviewId })
  }
}


export default connect(MapStateToProps, MapDispatchToProps)(ReviewsContainer)
