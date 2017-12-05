import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  handleOnClick = (event) => {
    this.props.store.dispatch({
      type: "DELETE_RESTAURANT",
      id: this.props.restaurant.id
    })
  }

  render() {
    return (
      <li id={this.props.restaurant.id}>
        {this.props.restaurant.text}
        <button onClick={(event) => this.handleOnClick(event)}>Delete</button>

        <ul>
          <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id}  />
        </ul>
      </li>
    );
  }
};

export default Restaurant;
