import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

let restaurant= null
class ReviewsContainer extends Component {

  render() {
    restaurant = this.props.restaurant
    return (
      <div>
        <ReviewInput restaurantId={restaurant.id} addReview={this.props.addReview}/>
        <Reviews restaurantId={restaurant.id} reviews={this.props.reviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = ({ reviews }) => ({ reviews })

const mapDispatchToProps = dispatch => ({
  addReview: (text,id) => dispatch({ type: "ADD_REVIEW", review: {text: text, restaurantId: id}}),
  deleteReview: id => dispatch({ type: "DELETE_REVIEW", id })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
