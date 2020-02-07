import React, { Component } from 'react'
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    
    const relatedReviews = this.props.reviews.filter(r => {
      return(r.restaurantId === this.props.restaurantId)});
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurantId}/>
        <Reviews reviews={relatedReviews} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    reviews: state.reviews
  });
}

const mapDispatchToProps = dispatch => {
  return({
    addReview: review => dispatch({type: "ADD_REVIEW", review}),
    deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
