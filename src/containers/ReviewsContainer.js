import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {
  getReview = () => {
    return this.props.reviews.filter(rev =>
      rev.restaurantId === this.props.restaurant.id)
  }

  render() {
    return (
      <div>
        <ReviewInput restaurant={this.props.restaurant}
          submit={this.props.addReview} />
        <Reviews reviews={this.getReview()}
          deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: rev => dispatch({
      type: 'ADD_REVIEW',
      review: rev
    }),
    deleteReview: rev => dispatch({
      type: 'DELETE_REVIEW',
      review: rev
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
