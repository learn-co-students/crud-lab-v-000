import React, { Component } from 'react';
import Restaurant from './Restaurant'
import { connect } from 'react-redux'


class Restaurants extends Component {

	renderRestaurants = () => this.props.restaurants.map((restaurant, id) => <Restaurant delete={this.props.delete} key={restaurant.id} restaurant={restaurant} />)

  render() {
  	console.log(this.props)
    return(
      <ul>
      	{this.renderRestaurants()}
      </ul>
    );
  }
};


const mapDispatchToProps = dispatch => ({
  delete: id => dispatch({ type: "DELETE_RESTAURANT", id })
})

export default connect(null, mapDispatchToProps)(Restaurants)