import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  
  render() {
    // const restaurants = this.props
    console.log(this.props.restaurants)
    const renderList = this.props.restaurants.map((restaurant) => {
      return(
        <Restaurant key={restaurant.id} restaurant={restaurant} deleteName={this.props.deleteName}/>        
      )
    })
    return(
        <div>Restaurants {renderList}</div>
    )
  }
};

export default Restaurants;