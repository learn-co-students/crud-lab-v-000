import React, { Component } from 'react'
import { connect } from 'react-redux';

import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurantId} />
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview} updateReview={this.props.updateReview} />
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => ({
  reviews: state.reviews.filter(review => review.restaurantId === ownProps.restaurantId)
})

const mapDispatchToProps = dispatch => {
  return {
    addReview: (restaurantId, text) => dispatch({
      type: 'ADD_REVIEW',
      review: {
        restaurantId,
        text
      }
    }),
    deleteReview: (id) => dispatch({
      type: 'DELETE_REVIEW',
      id
    }),
    updateReview: (id, text) => dispatch({
      type: 'UPDATE_REVIEW',
      review: {
        id,
        text
      }
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
