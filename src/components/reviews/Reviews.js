import React, { Component } from 'react';
import Review from './Review';

const Reviews = props => {

	const reviews = props.reviews.filter(review => review.restaurantId === props.restaurant.id).map( review => <Review key={review.id} restaurantId={props.restaurantId} restaurant={props.restaurant} review={review} deleteReview={props.deleteReview}/>) 
	
    return (
      <ul>
        Reviews
	{ reviews }
      </ul>
    );
};

export default Reviews;
