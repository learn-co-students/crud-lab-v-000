import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({ restaurants: state.restaurants })

const mapDispatchToProps = dispatch => ({
    addRestaurant: restaurant => dispatch({type: "ADD_RESTAURANT", text: restaurant}),
    deleteRestaurant: id => dispatch({type: "DELETE_RESTAURANT", id: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);

//First you'll need to create a RestaurantsContainer component that will connect to Redux and
//pass the appropriate props down to its children.

//ideally, only container components have code related to redux
