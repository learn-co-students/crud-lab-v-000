import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { addReview, deleteReview } from "../actions/reviewActions";
import { connect } from "react-redux";

class ReviewsContainer extends Component {

  filteredReviews = () => this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
        <Reviews reviews={this.filteredReviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: (review) => {
      dispatch(addReview(review));
    },
    deleteReview: (review) => {
      dispatch(deleteReview(review));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
