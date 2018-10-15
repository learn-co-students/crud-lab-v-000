import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {


  render() {

    return (

      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview}/>
        <Reviews restaurant={this.props.restaurant} deleteReview={this.props.deleteReview} reviews={this.props.reviews}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {reviews: state.reviews}
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({type: "ADD_REVIEW", review}),
    deleteReview: reviewId => dispatch({type: "DELETE_REVIEW", reviewId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
