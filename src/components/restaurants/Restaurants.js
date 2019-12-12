import React, { Component } from 'react';
import Restaurant from './Restaurant';
// import RestaurantInput from './RestaurantInput'

class Restaurants extends Component {

  
  renderRestaurant = () => {
    // console.log(this.props.addRestaurant)

    // pay attention to the IF statement here. iquick commom with redux..
    if (this.props.restaurants && this.props.restaurants.map) {
    return   this.props.restaurants.map(restaurant => < Restaurant delete={this.props.deleteRestaurant} key={restaurant.id} restaurant={restaurant} />)
    }
  }

  render() {
    return(
      <ul>
        Restaurants Component
        Restaurant Name
        {/*  line 20 or 21 is just text */}
        <div>
          {/* <RestaurantInput addResturant={this.props.addResturant} /> */}
              {this.renderRestaurant()}
        </div>
      </ul>
    );
  }
};




export default (Restaurants);