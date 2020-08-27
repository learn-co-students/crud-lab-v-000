import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput createRestaurant={this.props.createRestaurant} />
        <Restaurants />
      </div>
    )
  }
}

const mapStateToProps = ({ restaurants }) => ({ restaurants });
// Note: That's an ES6 shortcut for state => ({ restaurants: state.restaurants }).

const mapDispatchToProps = dispatch => {
  return {
    createRestaurant: text => dispatch({ type: 'CREATE_RESTAURANT', text })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
