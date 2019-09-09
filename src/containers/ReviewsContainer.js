import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import { connect } from 'react-redux'
import { addReview } from '../actions/actionCreators'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
        <Reviews restaurantId={this.props.restaurant.id} reviews={this.props.reviews} />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { reviews: state.reviews }
}

export default connect(mapStateToProps, { addReview })(ReviewsContainer)
