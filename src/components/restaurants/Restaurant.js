import React, { Component } from 'react';

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
      </li>
    );
  }
};

export default Restaurant;