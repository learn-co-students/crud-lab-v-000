import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    const reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)

    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={reviews} deleteReview={this.props.deleteReview}/>
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
    addReview: (text, restaurantId) => dispatch({type: "ADD_REVIEW", review: {text: text, restaurantId: restaurantId} }),
    deleteReview: id => dispatch({type: "DELETE_REVIEW", id: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
