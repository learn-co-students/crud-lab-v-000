import React, { Component } from 'react';

class Restaurant extends Component {

  handleClick = (e) => {
    this.props.store.dispatch({
      type: "DELETE_RESTAURANT",
      id: this.props.restaurant.id
    })
  }

  render() {
    return (
      <div>
        <li>{this.props.restaurant.text}</li>
        <button type="button" onClick={this.handleClick}>Delete</button>
      </div>
    );
  }
};

export default Restaurant;
