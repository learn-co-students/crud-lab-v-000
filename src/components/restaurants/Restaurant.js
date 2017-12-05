import React, { Component } from 'react';

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
        <button onClick={(event) => this.handleOnClick(event)}/>
      </li>
    );
  }
};

export default Restaurant;
