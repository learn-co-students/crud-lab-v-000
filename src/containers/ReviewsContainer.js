import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

import {connect} from 'react-redux'


class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurantId}/>
        <Reviews state={this.props.state}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => ({
  addReview: (review, restaurantId) => dispatch({type: 'ADD_REVIEW', review, restaurantId })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
