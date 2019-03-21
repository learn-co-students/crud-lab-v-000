import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
     const { restaurants, addRestaurant, deleteRestaurant, review } = this.props;

    return (
      <div>
        <RestaurantInput 
          addRestaurant={addRestaurant}/>
        <Restaurants 
          review = {review}
          restaurants={restaurants} 
          deleteRestaurant={deleteRestaurant} />
      </div>
    )
  }
}

const mapStateToProps = ({ restaurants }) => ({ restaurants })

const mapDispatchToProps = dispatch => ({
  addRestaurant: text => dispatch({ type: "ADD_RESTAURANT", text }),
  deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", id }),
 
    })


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
