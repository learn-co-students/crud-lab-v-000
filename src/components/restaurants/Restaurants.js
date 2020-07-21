import React, { Component } from 'react';
//displays a list of restaurants through restaurant...
import Restaurant from './Restaurant';

class Restaurants extends Component {

  render() {

    const restaurantsListed = this.props.restaurants.map(restaurant => {
      return (
        <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
            deleteRestaurant={this.props.deleteRestaurant}
        />
      )
    });

    return(
      <ul>
        Restaurants Component
        {restaurantsListed}
      </ul>
    );
  }
};

export default Restaurants;