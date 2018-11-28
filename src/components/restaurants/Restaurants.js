import React, { Component } from 'react';
import Restaurant from './Restaurant'
import { connect } from 'react-redux'

const Restaurants = props => {

  const renderRestaurants = props.restaurants.map( restaurant => <Restaurant deleteRestaurant={props.deleteRestaurant} key={restaurant.id} restaurant={restaurant} />)  

    return(
	    <div>
	      <ul>
		Restaurants Component
		{renderRestaurants}
	      </ul>
	    </div>
    );
};

export default Restaurants;
