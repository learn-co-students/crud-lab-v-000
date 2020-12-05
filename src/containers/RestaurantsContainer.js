import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addName={this.props.addName}/>
        <Restaurants restaurants={this.props.restaurants} deleteName={this.props.deleteName}/>
        {console.log(this.props)}
      </div>
    )
  }
}

// console.log(this.props)

const mapStateToProps = state => ({restaurants: state.restaurants})

const mapDispatchToProps = dispatch => ({
  addName: text => dispatch({type: 'ADD_RESTAURANT', text}),
  deleteName: id => dispatch({type: 'DELETE_RESTAURANT', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
