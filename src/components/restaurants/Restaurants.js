import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  // renderRestaurants = () => this.props.restaurants.map((restaurant) => <Restaurant key={restaurant.id} restaurant={restaurant} />)
    // return this.props.restaurants.map(restaurant => <Restaurant delete={this.props.delete} key={restaurant.id} restaurant={restaurant} />)
  // }

  render() {
    const {restaurants, deleteRestaurant} = this.props
    const restaurantList = restaurants.map(restaurant => {
      return (
        <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
            deleteRestaurant={deleteRestaurant}
        />
      )
    });
    
    return(
      <ul>
        {/* <RestaurantInput addRestaurant={this.props.addRestaurant}/> */}
        {/* {this.renderRestaurants()}
       */}
       {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;

// const restaurants = this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/>)