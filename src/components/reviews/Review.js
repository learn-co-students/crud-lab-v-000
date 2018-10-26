import React from 'react';

const Review = props => {
  
  return (
    <div>
      <li>
        {props.text}
      </li>
      <button onClick={() => props.deleteReview(props.id)}> X </button>
    </div>
  );
};


export default Review;
