import React from 'react';

const Review = props => {
  return (
    <div>
      <li>
        {props.review.text}
      </li>
      <button onClick={props.deleteReview(props.review.id)}> Delete </button>
    </div>
  );
};

export default Review;
