import React from 'react';
import Review from './Review';

const Reviews = props => {
  return (<ul>
    {props.reviews.map(review => {
      return <Review review={review} key={review.id}
      deleteReview={props.deleteReview} />
    })}
  </ul>)
};

export default Reviews;
