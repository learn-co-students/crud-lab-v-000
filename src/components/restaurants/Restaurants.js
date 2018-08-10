import React, {Component} from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  renderRestaurants = () => {
    return this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} />)
  }

  render() {
    return(
      <div>
        <ul>
          <h3>Restaurants</h3>
          {this.renderRestaurants()}
        </ul>
      </div>
    )
  }
}

export default Restaurants;