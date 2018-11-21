import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRes={this.props.addRes} />
        <Restaurants restaurants={this.props.restaurants} deleteRes={this.props.deleteRes}/>
      </div>
    )
  }
}


const mapStateToProps = ({ restaurants }) => ({ restaurants })

const mapDispatchToProps = dispatch => ({
  addRes: text => dispatch({ type: "ADD_RESTAURANT", text }),
  deleteRes: id => dispatch({type: "DELETE_RESTAURANT", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
