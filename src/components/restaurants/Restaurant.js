import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'


class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;
    return (
      <div>
        <li key={restaurant.id}>
          {restaurant.text}
          <button onClick={() => this.props.delete(restaurant.id)}>DELETE_RESTAURANT</button>
          <ReviewsContainer restaurant={restaurant} add={this.props.addRestaurant}/>
        </li>
      </div>
    );
  }
};


export default (Restaurant)