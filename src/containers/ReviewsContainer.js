import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {

  render() {
      const restaurant = this.props.restaurant;
      const reviews = this.props.reviews;
      const restaurantReviews = reviews.filter(review => review.restaurantId === restaurant.id)

    return (
      <div>
        <ReviewInput restaurant={restaurant} addReview={this.props.addReview}/>
        <Reviews restaurantReviews={restaurantReviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    reviews: state.reviews

  };

}

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({
    type: "ADD_REVIEW",
    review
  }),
  deleteReview: id => dispatch({
    type: "DELETE_REVIEW",
    id
  })
})
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
