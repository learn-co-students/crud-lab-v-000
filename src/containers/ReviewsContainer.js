import React, { Component } from 'react'
import {connect} from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput/>
        <Reviews />
      </div>
    )
  }
}

export default connect(null,null)(ReviewsContainer)
