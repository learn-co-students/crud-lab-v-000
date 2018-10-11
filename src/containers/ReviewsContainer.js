import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    // debugger;
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview} />
        <Reviews reviews={this.props.reviews} restaurantId={this.props.restaurant.id} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  addReview: ({text, restaurantId }) => dispatch({ type: "ADD_REVIEW", review: {text, restaurantId} }),
 
  deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
})

const mapStateToProps = state => {
  return {reviews: state.reviews}
}


export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
