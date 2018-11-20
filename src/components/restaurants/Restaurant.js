import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {
  deleteRestaurant = () => {
    this.props.delete(this.props.restaurant)
  }
  render() {
    return (
      <div>
        <li>
          {this.props.restaurant.name}
          <button onClick={this.deleteRestaurant}>
            Delete Restaurant </button>
          <ReviewsContainer restaurant={this.props.restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
