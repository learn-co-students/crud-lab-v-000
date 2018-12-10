import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput />
        <Reviews />
      </div>
    )
  }
}


const mapStateToProps = ({ reviews }) => ({ reviews })

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({ type: "ADD_REVIEW", review }),
  deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)


