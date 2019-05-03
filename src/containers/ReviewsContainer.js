import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput submitReview={this.props.submitReview} restaurant={this.props.restaurant} restaurantId={this.props.restaurantId} />
        <Reviews restaurantId={this.props.restaurantId} delete={this.props.delete} reviews={this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitReview: (formData, restaurantId) => dispatch({
      type: "ADD_REVIEW",
      review: { text: formData.text,
      restaurantId: restaurantId }
    }),
    delete: id => dispatch({
      type: "DELETE_REVIEW",
      id: id
    })
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
