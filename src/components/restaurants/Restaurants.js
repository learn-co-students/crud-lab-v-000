import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
render() {
  // const restaurants = this.props.restaurants || []
    // const restaurantList = restaurants.map(restaurant => {
      return (
        <div>
        {this.props.restaurants ?
        <div>
            {this.props.restaurants.map(restaurant => {
              <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/>
            })}
          </div>
          :
          <h1>hello</h1>
        }
        </div>
        // <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/>
      )
    }

  //   return (
  //     <ul>
  //       <h4>Your Restaurants:</h4>
  //       {restaurantList}
  //     </ul>
  //   );
  // }
}
export default Restaurants;
