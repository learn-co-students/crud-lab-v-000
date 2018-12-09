import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    const { reviews, restaurant, addReview, deleteReview } = this.props;
    const filteredReviews = reviews.filter(review => {
      return review.restaurantId === restaurant.id;
    });
    return (
      <div>
        <ReviewInput
          addReview={addReview}
          restaurantId={restaurant.id}
        />
        <Reviews
          reviews={filteredReviews}
          restaurant={restaurant}
          deleteReview={deleteReview}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({
      type: 'ADD_REVIEW', review
    }),
    deleteReview: id => dispatch({
      type: 'DELETE_REVIEW', id
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
