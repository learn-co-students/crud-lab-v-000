import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
import {connect} from 'react-redux';

const Restaurant = props => {

  const handleOnClick = e => {
    e.preventDefault();

    props.deleteRestaurant(e.target.id)
  }

    const { restaurant } = props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button id={restaurant.id} onClick={ handleOnClick }> X </button> 
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
};

export default Restaurant;
