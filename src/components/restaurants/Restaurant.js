import React, { Component } from 'react';

class Restaurant extends Component {
  handleClick = () => {
    this.props.store.dispatch({
      type: "DELETE_RESTAURANT",
      id: this.props.restaurant.id
    });
  }

  render() {
    return (
      <li>
        {this.props.restaurant.text}
        <button onClick={this.handleClick}>x</button>
      </li>
    );
  }
};

export default Restaurant;
