import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import {connect} from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRest={this.props.addRest}/>
        <Restaurants delRest={this.props.delRest} rests={this.props.restaurants}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {restaurants: state.restaurants}
}

const mapDispatchToProps = dispatch => {
  return{
    addRest: (text) => dispatch({type: 'ADD_RESTAURANT', text: text}),
    delRest: (id) => dispatch({type: 'DELETE_RESTAURANT', id: id}),
    addRev: (text) => dispatch({type: 'ADD_REVIEW', text: 'text'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
