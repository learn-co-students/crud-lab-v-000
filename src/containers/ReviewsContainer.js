import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';
import { addReview } from '.././actions/addReview';
import { deleteReview } from '.././actions/deleteReview';

class ReviewsContainer extends Component {
  render() {
    const restaurant = this.props.restaurant
    return (
      <div>
        <ReviewInput restaurantId={ restaurant.id } add={ this.props.addReview } />
        <Reviews restaurantId={ restaurant.id } reviews={ this.props.reviews } delete={ this.props.deleteReview} />
      </div>
    )
  }
}

export default connect(state => ({ reviews: state.reviews }), { addReview, deleteReview })(ReviewsContainer)
