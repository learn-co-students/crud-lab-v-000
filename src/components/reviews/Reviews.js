import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, deleteReview, restaurantId } = this.props;
    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId)
    const reviewList = associatedReviews.map((review,i) => {
      return (

        <Review
            key={i}
            review={review}
            deleteReview={deleteReview}
        />
      )
    });

    return(
     <div>
       <ul>
         {reviewList}
       </ul>
     </div>
   )
    }
};

export default Reviews;
