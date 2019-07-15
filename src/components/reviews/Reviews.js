import React from 'react';
import Review from './Review';

const Reviews = props => {

    const filterReviews = props.reviews.filter(review => review.restaurantId === props.restaurantId);

    const reviews = filterReviews.map(review => <Review key={review.id} review={review} deleteReview={props.deleteReview} updateReview={props.updateReview}/>)

    return (
             <ul>
              {reviews}
             </ul>
    );
};


export default Reviews;
