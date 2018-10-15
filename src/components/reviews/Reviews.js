import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from './Review';


class Reviews extends Component {
  reviewsFilteredByRestaurant = () => (
    this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
  )

  renderReviews = () => this.reviewsFilteredByRestaurant().map(review =>
    <Review key={review.id} delete={this.props.deleteReview} review={review} />
  )

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

const mapStateToProps = state => {
  return({
    reviews: state.reviews
  })
}

const mapDispatchToProps = dispatch => {
  return({
    deleteReview: id => dispatch({type: "DELETE_REVIEW", id: id})
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);