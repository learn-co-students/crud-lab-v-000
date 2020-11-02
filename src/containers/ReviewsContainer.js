import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    const { restaurant, addReview, deleteReview, reviews } = this.props;
    const restaurantReviews = reviews.filter(review => review.restaurantId === restaurant.id);
    return (
      <div>
        <ReviewInput restaurantId={restaurant.id} addReview={addReview}/>
        <Reviews reviews={restaurantReviews} deleteReview={deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = ({ reviews }) => ({ reviews });

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({ type: 'ADD_REVIEW', review }),
    deleteReview: id => dispatch({type: 'DELETE_REVIEW', id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer); 
