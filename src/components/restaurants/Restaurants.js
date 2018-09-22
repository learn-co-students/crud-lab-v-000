import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    let restaurants = 
        this.props.restaurants.map(restaurant => 
          <div key={restaurant.id}>  
              <Restaurant restaurant={restaurant} 
               delete={this.props.deleteRestaurant}/>
          </div>)
    
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;