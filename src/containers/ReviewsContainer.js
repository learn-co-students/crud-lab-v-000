import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput
          restaurantId={this.props.restaurant.id}
          addReview={this.props.addReview}
        />
        <Reviews
          restaurantId={this.props.restaurant.id}
          deleteReview={this.props.deleteReview}
          reviews={this.props.reviews}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {reviews: state.reviews}
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: data => dispatch({
      type: "ADD_REVIEW",
      review: data
    }),
    deleteReview: data => dispatch({
      type: "DELETE_REVIEW",
      review: data
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
