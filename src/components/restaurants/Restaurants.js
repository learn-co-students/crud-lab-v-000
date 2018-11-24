import React, { Component } from 'react';
import Restaurant from './Restaurant'
import { connect } from 'react-redux'

class Restaurants extends Component {
debugger
  renderRestaurants = () => {
	  debugger
    return this.props.restaurants.map( restaurant => <Restaurant delete={this.props.delete} key={restaurant.id} restaurant={restaurant} />)  
  }

  render() {
	  debugger
    return(
	    <div>
	      <ul>
		Restaurants Component
		{this.renderRestaurants()}
	      </ul>
	    </div>
    );
  }
};

const mapStateToProps = ({ restaurants }) => ({ restaurants })

const mapDispatchToProps = dispatch => ({
 delete: restaurantId => dispatch({type: 'DELETE_RESTAURANT', id: restaurantId })
})

//export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)
