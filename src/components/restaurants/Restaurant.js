import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleOnClick = () => {
    this.props.deleteRestaurant(this.props.id)
  }

  render() {

    return (
      <div>
        <li>
          {this.props.text}
          <button onClick={this.handleOnClick}> X </button>
        </li>
      </div>
    );
  }
};

export default Restaurant;
