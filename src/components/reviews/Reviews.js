import React, { Component } from 'react';
import Review from './Review';

const Reviews = ({ reviews, removeReview }) => {
    return (

      <div>
      <ul>
        {reviews.map( review => <Review key={review.id} review={review} removeReview={removeReview}/>)}
      </ul>
      </div>
    );
};

export default Reviews;
