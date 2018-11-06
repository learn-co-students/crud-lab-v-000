import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview}/>
        <Reviews deleteReview={this.props.deleteReview} reviews={this.props.reviews} restaurantId={this.props.restaurant.id}/>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    reviews: store.reviews
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: (review) => dispatch({
      type: 'ADD_REVIEW',
      payload: review
    }),
    deleteReview: (reviewId) => dispatch({
      type: 'DELETE_REVIEW',
      payload: reviewId,
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
