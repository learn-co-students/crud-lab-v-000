import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux';
import {addReview, removeReview} from '../actions/actions.js'

class ReviewsContainer extends Component {



  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview}/>
        <Reviews reviews={this.props.reviews} restaurantId={this.props.restaurant.id} delete={this.props.removeReview}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {reviews: state.reviews}
}

export default connect(mapStateToProps, {addReview, removeReview})(ReviewsContainer)
