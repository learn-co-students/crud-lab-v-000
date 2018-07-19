import React, { Component } from 'react';

class Restaurant extends Component {

  handleClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id,
    })
  }

  render() {
    return (
      <li>
        {this.props.restaurant.text}
        &nbsp;<button onClick={this.handleClick}>X</button>
      </li>
    );
  }
};

export default Restaurant;
