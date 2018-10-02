import React, { Component } from 'react';
import { connect } from 'react-redux';
import Restaurant from './Restaurant'

class Restaurants extends Component {

	renderRestaurants = () => this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} />)

  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

const mapStateToProps = ({ restaurants }) => ({ restaurants })

const mapDispatchToProps = dispatch => ({
  deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);