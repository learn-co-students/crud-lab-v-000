import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleDelete = (event) => {
    event.preventDefault();
      this.props.delete(this.props.restaurant.id)
    }

  render() {
    const restaurant = this.props.restaurant;

    return (
      <div>
        <li>
          <h2>{restaurant.text} - {restaurant.id}</h2>
          <button onClick={event => this.handleDelete(event)}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
