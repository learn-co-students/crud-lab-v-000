import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import {connect} from 'react-redux'

class RestaurantsContainer extends Component {
//  Props. is avaliable here. that include all the restaurants
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        {/* We have the RestaurantInput in here... and we have it was a props/. and 
        
        */}
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({restaurants: state.restaurants })
//  Bands is come from here because it in the store....  And it then used.
//  this is mapping all the state  to props so we can use it in the 
//  components. 

const mapDispatchToProps = dispatch => ({
  addRestaurant: text => dispatch({ type: "ADD_RESTAURANT", text }),
  deleteRestaurant: id => dispatch({type:"DELETE_RESTAURANT", id })
})


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
