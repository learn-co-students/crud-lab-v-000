import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurants extends Component {
  handleDelete = id => {
    this.props.delete(id)
  }

  render() {
    let restaurant = this.props.restaurant;

    return(
      <React.Fragment>
        <li> Name: {restaurant.text} - ID: {restaurant.id} <button onClick={() => this.handleDelete(restaurant.id)}>X</button></li>
        <ReviewsContainer restaurant={restaurant} />
      </React.Fragment>
    );
  }
};

export default Restaurants;