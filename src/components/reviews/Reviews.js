import React, { Component } from 'react';
import Review from './Review';

import { connect } from 'react-redux';

class Reviews extends Component {
  displayReviews() {
    const associatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const restaurantReviews = associatedReviews.map(review => {
      return <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />
    })
    return restaurantReviews
  }

  render() {
    return (
      <ul>
        {this.displayReviews()}
      </ul>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  deleteReview: id => dispatch({ type: 'DELETE_REVIEW', id })
})

export default connect(null, mapDispatchToProps)(Reviews);