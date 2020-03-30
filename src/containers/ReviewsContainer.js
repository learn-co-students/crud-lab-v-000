import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    const { restaurant } = this.props;
    const { reviews } = this.props;

    return (
      <div>
        <ReviewInput restaurant={restaurant} restaurantId={restaurant.id} addReview={this.props.addReview}/>
        <Reviews reviews={reviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: state.reviews.filter(review => review.restaurantId === ownProps.restaurant.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({
      type: "ADD_REVIEW",
      review: review
    }),
    deleteReview: reviewId => dispatch({
      type: "DELETE_REVIEW",
      reviewId: reviewId
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
