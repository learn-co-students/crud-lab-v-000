import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { addRestaurant, deleteRestaurant } from '../components/actions/restaurants.js'
import { bindActionCreators} from 'redux'
import { connect } from 'react-redux'


class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}  />
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ restaurants: state.restaurants });

const mapDispatchToProps = dispatch => {
  return bindActionCreators ({
    addRestaurant: addRestaurant,
    deleteRestaurant: deleteRestaurant
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
