import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        {/* How do I pass down delete all the way to Restaurant component? */}
        <Restaurants restaurants={this.props.restaurants} delete={this.props.delete} />
      </div>
    )
  }
}

//How do I know how to properly set this up?
const mapStateToProps = ({ restaurants }) => ({ restaurants })

const mapDispatchToProps = dispatch => ({
  addRestaurant: text => dispatch({ type: 'ADD_RESTAURANT', text }),
  delete: id => dispatch({type: "DELETE_RESTAURANT", id })
})


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
