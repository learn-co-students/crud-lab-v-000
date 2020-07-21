import React, { Component } from 'react';
import Review from './Review';


class Reviews extends Component {
  //need to get the reviews for each restuarant
  
  render() {
    
    const specificReviews = this.props.reviews.filter(review => review.restaurantId == this.props.restaurantId)
    const listedReviews = specificReviews.map(review =>{
      return (
        <Review 
          key={review.id}
          review={review}
          deleteReview={this.props.deleteReview}
        />
      )


    }


    )

    return (
      <ul>
        Reviews
        {listedReviews}
      </ul>
    );
  }
};

export default Reviews;