import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    let restaurantId = this.props.restaurant.id
    let myReviews = this.props.reviews.filter(review => review.restaurantId === restaurantId)

    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={restaurantId} />
        <Reviews myReviews={myReviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => ({reviews})

const mapDispatchToProps = dispatch => {
  return { addReview: (text, restaurantId) => dispatch({
    type: 'ADD_REVIEW', payload: text, restaurantId: restaurantId }),
    deleteReview: (reviewId) => dispatch({
      type: 'DELETE_REVIEW', payload: reviewId })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
