import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {


  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview}/>
        <Reviews delete={this.props.delete} reviews={this.props.reviews.filter(
          (review) => review.restaurantId === this.props.restaurant.id
        )}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews,
  }
}

const mapDispatchToProps = dispatch => ({
  addReview: (text, id) => dispatch({ type: "ADD_REVIEW", review: {text: text, restaurantId: id}}),
  delete: id => dispatch({type: 'DELETE_REVIEW', id: id })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
