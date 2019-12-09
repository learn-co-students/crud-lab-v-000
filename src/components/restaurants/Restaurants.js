import React, { Component } from 'react';
import { deleteRestaurant } from '../../actions/restaurants';
import { connect } from 'react-redux'
import Restaurant from './Restaurant';


class Restaurants extends Component {
   renderRestaurants = () => {
  return this.props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} delete={this.props.deleteRestaurant}/>)
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