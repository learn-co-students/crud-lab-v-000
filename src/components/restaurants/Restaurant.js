import React, { Component } from 'react';

class Restaurant extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }

  render() {
    return (
      <div>
        <li>{this.props.restaurant.text}</li>
        <button onClick={() => this.handleOnClick()}>X</button>
      </div>
    );
  }
};

export default Restaurant;
