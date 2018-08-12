import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
        <Reviews reviews={this.props.reviews} addReview={this.props.addReview} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (text, restaurantId) => dispatch({ type: "ADD_REVIEW", review: { text, restaurantId } }),
    deleteReview: (id, restaurantId) => dispatch({ type: "DELETE_REVIEW", payload: { id, restaurantId } })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
