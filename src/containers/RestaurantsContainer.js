import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput create={this.props.create}/>
        <Restaurants restaurants={this.props.restaurants} delete={this.props.delete}/>
      </div>
    )
  }
}
const mapStateToProps = ({restaurants}) => ({restaurants})

const mapDispatchToProps = dispatch => ({
  create: text => dispatch({ type: 'ADD_RESTAURANT', text }),
  delete: id => dispatch({ type: 'DELETE_RESTAURANT', id })
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
