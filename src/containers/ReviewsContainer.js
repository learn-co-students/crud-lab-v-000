import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import { connect } from 'react-redux'
import { addReview } from '../actions/actionCreators'

class ReviewsContainer extends Component {
  render() {
    console.log('ReviewsContainer - this.props', this.props)

    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
      </div>
    )
  }
}

export default connect(null, { addReview })(ReviewsContainer)
