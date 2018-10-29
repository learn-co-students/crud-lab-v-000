import React, { Component } from 'react';
import Review from './Review'

const Reviews = props => {
	const reviews = props.reviews.filter(review => props.id === review.restaurantid).map(review => <Review key={review.id} {...review} deleteReview={props.deleteReview}/>)
	return(
      <ul>
        {reviews}
      </ul>
  );
}


export default Reviews;