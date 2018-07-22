import React, { Component } from 'react';

class Restaurant extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    });
  }
  
  render() {
    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={this.handleOnClick}>Delete</button>
        </li>
      </div>
    );
  }
};

export default Restaurant;