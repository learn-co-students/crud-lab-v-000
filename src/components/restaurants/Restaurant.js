import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.props.delete(restaurant.id)}> X </button>
          <ReviewsContainer restaurant={restaurant} store={this.props.store}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
