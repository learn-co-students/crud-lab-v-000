import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
   renderRestaurants = () => {
       console.log(this.props.restaurants)
  return this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} delete={this.props.deleteRestaurant}/>)
} 

  render() {
    return(
      <ul>
        Restaurants Component
        {this.renderRestaurants()}
      </ul>
    );
  }
};

//const mapDispatchToProps = dispatch => {
  //return {
    //deleteRestaurant: (id) => {
      //dispatch(deleteRestaurant(id))
    //}
  //};
//};

//const mapStateToProps = (state) => {
  //return {
    //restaurants: state.restaurants
  //}
//};


export default (Restaurants)