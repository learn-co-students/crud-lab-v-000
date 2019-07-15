import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { addReview, deleteReview, updateReview } from '.././actions/reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <br />
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
        <br />
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview} updateReview={this.props.updateReview} restaurantId={this.props.restaurant.id} />
      </div>
    )
  }
}


/*
const mapStateToProps = state => {
  return {reviews: state.reviews}
}

 const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({type: "ADD_REVIEW", review}),
  deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
})

 export default connect(mapStateToProps, mapDispatchToProps) (ReviewsContainer)
*/

export default connect(state => ({ reviews: state.reviews }), { addReview, deleteReview, updateReview })(ReviewsContainer)
