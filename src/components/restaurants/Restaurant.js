import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleOnClick = () => {this.props.deleteRestaurant(this.props.restaurant.id)}

  render() {
    return (
      <div>
        <li>
          {this.props.restaurant.text}
        </li>
        <button onClick={this.handleOnClick}> X </button>
        <ReviewsContainer restaurant={this.props.restaurant.text}/>
      </div>
    );
  }
};

export default Restaurant;
