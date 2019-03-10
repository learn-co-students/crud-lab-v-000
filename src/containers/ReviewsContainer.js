import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

import { connect } from 'react-redux'

class ReviewsContainer extends Component {
  // filterReviews = () => {this.props.reviews.filter(review => this.props.restaurant.id === review.restaurantId)}

  render() {
    const filterReviews = this.props.reviews.filter(review => this.props.restaurant.id === review.restaurantId)

    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={filterReviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ reviews: state.reviews })

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({type: "ADD_REVIEW", review}),
  deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
