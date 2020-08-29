import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  renderRestaurants = () => {
    // console.log(this.props)
    this.props.restaurants.map((restaurant, index) => <li key={index}>{restaurant.text}</li>)
  }

  render() {
    const allRestaurants = this.props.restaurants.map(restaurant => 
    <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/>)
    return(
        <div>
            {allRestaurants}
            <ul>
            {this.renderRestaurants()}
            </ul>
        </div>

      


      
    );
  }
};

export default Restaurants;