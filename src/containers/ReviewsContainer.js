import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} {...this.props.actions}/>
        <Reviews reviews={this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)} actions={this.props.actions}/>
      </div>
    )
  }
}

const mapStateToProps = state=> ({
  reviews: state.reviews
})
const mapDispatchToProps = dispatch=> ({
  actions: {
    addReview: review=> dispatch({type: "ADD_REVIEW", review}),
    deleteReview: id=> dispatch({type: "DELETE_REVIEW", id: id}),
    updateReview: data=> dispatch({type: "UPDATE_REVIEW", ...data})
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
