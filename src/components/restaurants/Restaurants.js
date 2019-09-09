import React, { Component } from 'react'
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.restaurants.map((restaurant) => (
            <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} />
          )
          )}
        </ul>
      </div>
    )
  }
}

export default Restaurants;