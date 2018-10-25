import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} />
        <Reviews />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: formData => dispatch({ type: 'ADD_REVIEW', formData })
  }
}

export default connect(null, mapDispatchToProps)(ReviewsContainer)
