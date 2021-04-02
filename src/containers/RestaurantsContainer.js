import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {

  render() {
    const { restaurants } = this.props;

    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={restaurants}/>
      </div>
    )
  }
}

const mapStateToProps = ({ restaurants }) => ({ restaurants })

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: text => dispatch({ type: "ADD_RESTAURANT", text }),
    delete: id => dispatch({
      type: 'DELETE_RESTAURANT', payload: id
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);