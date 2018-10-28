import React, { Component } from 'react';
import Restaurant from './Restaurant'
import { connect } from 'react-redux'

class Restaurants extends Component {

  renderRestaurant = () => this.props.restaurants.map((restaurant, id) => <Restaurant deleteRestaurant={this.props.deleteRestaurant} key={restaurant.id} restaurant={restaurant} />)

  render() {
    return(
      <ul>
        {this.renderRestaurant()}
      </ul>
    );
  }
};

const mapStateToProps = ({ restaurants }) => ({ restaurants })
const mapDispatchToProps = dispatch => ({
  deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", id })
})

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)
