import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {
    
    return (
      <div>
        <li key={this.props.restaurant.id}>
          {this.props.restaurant.text}
          <button onClick={this.handleClick}>hello</button>
          <ReviewsContainer restaurant={this.props.restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
