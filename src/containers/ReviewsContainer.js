import React, { Component } from 'react'
import { connect } from 'react-redux';

import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { addReview, deleteReview } from '../actions/Reviews';

class ReviewsContainer extends Component {

  render() {
    console.log("reviews container",this.props);
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
        <Reviews deleteReview={this.props.deleteReview} 
          reviews={this.props.reviews.reviews.filter( review => review.restaurantId === this.props.restaurant.id)} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

export default connect(mapStateToProps, {addReview, deleteReview})(ReviewsContainer)


