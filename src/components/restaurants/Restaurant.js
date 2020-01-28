import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {

    return (
      <div>
        <li>
          {this.props.restaurant}
          <button onClick={() => this.props.delete(this.props.id)}> X </button>
          <ReviewsContainer restaurantId={this.props.id} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
