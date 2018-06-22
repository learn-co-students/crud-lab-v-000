import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }

  render() {
    return (
      <li>
        {this.props.restaurant.text}
        <button onClick={this.handleOnClick} />
        <div>
          <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id} />
        </div>
      </li>
    );
  }
};

export default Restaurant;
