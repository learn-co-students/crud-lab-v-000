import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleClick = () => {
    this.props.delete(this.props.id)
  }

  render() {
    return (
      <div>
        <li key={this.props.restaurant.id}>
          <h3>Restaurant: {this.props.restaurant.text}</h3>
          <button onClick={this.handleClick}> Delete {this.props.restaurant.text}</button>
          <ReviewsContainer restaurantId={this.props.restaurant.id} />
        </li>
      </div>
    );
  }

}

export default Restaurant;
