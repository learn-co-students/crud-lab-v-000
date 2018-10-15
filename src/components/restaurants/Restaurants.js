import React, { Component } from 'react';
import { connect } from 'react-redux';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  renderRestaurants = () => this.props.restaurants.map(restaurant =>
    <Restaurant key={restaurant.id} delete={id => this.props.deleteRestaurant(id)} restaurant={restaurant} />
  )

  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps)(Restaurants);