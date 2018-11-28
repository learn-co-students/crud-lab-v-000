import React, { Component } from 'react';

const Review = props => {

  const handleOnClick = e => {
    e.preventDefault();

    props.deleteReview(e.target.value)
  }

    const { review } = props

    return (
      <div>
        <li>
          { review.text }
        </li>
        <button value={ review.id } onClick={ handleOnClick }> X </button>
      </div>
    );

};

export default Review;
