import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleDelete = () => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }


  render() {
    return (
      <div>
        <li>
          { this.props.restaurant.text }
          &nbsp; <button onClick={ () => this.handleDelete() }> DELETE </button>
          <br />
          <br />
          <ReviewsContainer restaurantId={ this.props.restaurant.id }/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
