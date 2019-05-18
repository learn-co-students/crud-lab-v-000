import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} restaurant={this.props.restaurant} addReview={this.props.addReview} />
        <Reviews restaurantId={this.props.restaurant.id} reviews={this.props.reviews} deleteReview={this.props.deleteReview} />
      </div>
    )
  };
};

const mapStateToProps = ({ reviews }) => ({ reviews });

const mapDispatchToProps = dispatch => ({
  addReview: (text, restaurantId) => dispatch({type: "ADD_REVIEW", review: {text: text, restaurantId: restaurantId}}),
  deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
