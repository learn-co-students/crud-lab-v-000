import React, { Component } from 'react';

class Restaurant extends Component {
  render() {
    return (
      <li>
        { this.props.restaurant.text }
        <button onClick={ () => this.handleClick() }>Delete</button>
      </li>
    );
  }

  handleClick() {
    this.props.store.dispatch({
      type: 'DELETE RESTAURANT',
      id: this.props.restaurant.id
    })
  }
};

export default Restaurant;