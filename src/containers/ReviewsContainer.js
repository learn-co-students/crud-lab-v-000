import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux';
import { addReview, deleteReview } from '../components/actions/ReviewActions';
import cuid from 'cuid';


class ReviewsContainer extends Component {
  handleAddRestaurant = reviewText => {
    const reviewInfo = {
      text: reviewText,
      restaurantId: this.props.restaurant.id
    };
    
    this.props.addReview(reviewInfo);
  }
  
  render() {
    let restaurant = this.props.restaurant;
    let reviewList = this.props.reviews.map(review => { 
      if (review.restaurantId === restaurant.id) {
        return <Reviews key={cuid()} review={review} restaurantId={restaurant.id} delete={this.props.deleteReview}/>;
      }
    });

    return (
      <div>
        <ReviewInput restaurantId={restaurant.id} add={this.handleAddRestaurant} />
        <ul>
          {reviewList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  };
}

export default connect(mapStateToProps, { addReview, deleteReview })(ReviewsContainer);
