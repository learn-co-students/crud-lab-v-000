import React, { Component } from 'react';
import Restaurant from './Restaurant'

// TODO refactor to remove id prop since that information is in the restaurant prop

class Restaurants extends Component {
  render() {
      const restaurantCards = this.props.restaurants.map(restaurant =>  {
        return <Restaurant key={restaurant.id} restaurant={restaurant} delete={this.props.delete} id={restaurant.id} />
      })
      return (
        <ul>
          {restaurantCards}
        </ul>
      )
  }
};
    
export default Restaurants;