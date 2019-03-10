import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {
  render() {
    const { addR, restaurants, deleteR, updateR } = this.props

    return (
      <div>
        <RestaurantInput formMethod={addR} />
        <Restaurants restaurants={restaurants}
                     updateR={updateR}
                     deleteR={deleteR} />
      </div>
    )
  }
}

const mapStateToProps = ({ restaurants }) => ({ restaurants })

const mapDispatchToProps = dispatch => ({
    addR: restaurant => dispatch({ type: "ADD_RESTAURANT", restaurant }),
    deleteR: id => dispatch({ type: "DELETE_RESTAURANT", id }),
    updateR: restaurant => dispatch({ type: "UPDATE_RESTAURANT", restaurant })
})


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
