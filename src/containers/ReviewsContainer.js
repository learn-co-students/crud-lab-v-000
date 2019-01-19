import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { addReview, deleteReview } from '../components/actions/reviews.js'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput />
        <Reviews  />
      </div>
    )
  }
}



export default ReviewsContainer


// const mapStateToProps = (state) => {(reviews: state.reviews)}
//
// const mapDispatchToProps = (dispatch) => {
//     return ({
//       addReview: addReview,
//       deleteReview: deleteReview
//     }, dispatch);
// }
