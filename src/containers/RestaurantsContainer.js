import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput />
        <Restaurants />
      </div>
    )
  }
}

// const mapStateToProps = ({ bands }) => ({ bands })
const mapStateToProps = ({})

const mapDispatchToProps = dispatch => ({
  // addBand: name => dispatch({ type: "ADD_BAND", name }),
  // deleteBand: id => dispatch({ type: "DELETE_BAND", id })
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)