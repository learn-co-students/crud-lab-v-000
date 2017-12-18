import React, { Component } from 'react';

class Restaurant extends Component {
  
  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }
  
  render() {
    const { text, id } = this.props.restaurant

    return (
      <div>
        <li>{text}</li>
        <button onClick={() => this.handleOnClick()}>
          Delete
        </button>
      </div>
    );
  }
};

export default Restaurant;