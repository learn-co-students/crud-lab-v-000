import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

import {connect} from 'react-redux'


class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurantId}/>
        <Reviews reviews={this.props.state.reviews} restaurantId={this.props.restaurantId} delete={this.props.delete} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => ({
  addReview: (review, restaurantId) => dispatch({type: 'ADD_REVIEW', review: {text: review, restaurantId} }),
  delete: reviewId => dispatch({type: 'DELETE_REVIEW', reviewId})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
