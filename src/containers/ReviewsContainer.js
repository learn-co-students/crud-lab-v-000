import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  reviews = () => this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} dispatch={this.props.dispatch} />
        <Reviews dispatch={this.props.dispatch} reviews={this.reviews()} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { reviews: state.reviews }
}

export default connect(mapStateToProps)(ReviewsContainer)
