import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';
class Restaurant extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id,
    });
  }

  render() {
    return (

        <li>
          {this.props.restaurant.text}
          <button onClick={this.handleOnClick} />
          <ReviewInput restaurantId={this.props.restaurant.id} store={this.props.store} />
        </li>
    );
  }
};

export default Restaurant;
