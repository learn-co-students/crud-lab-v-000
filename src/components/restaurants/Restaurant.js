import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {
  render() {
    const { restaurant, deleteRest } = this.props;

    return (
      <div>
        <li>
          {restaurant.name}
          <button onClick={() => deleteRest(restaurant.id)}> DELETE </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
