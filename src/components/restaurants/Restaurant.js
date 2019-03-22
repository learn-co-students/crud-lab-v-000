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
        <button onClick={(event) => this.handleOnClick(event)}> X </button>
        <ReviewsContainer restaurant={this.props.restaurant}/>
      </div>
    );
  }
};

export default Restaurant;
