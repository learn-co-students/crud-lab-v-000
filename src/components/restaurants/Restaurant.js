import React, { Component } from 'react';

class Restaurant extends Component {
  render() {
    return (
      <li>
        {text}
        <button onClick={this.handleOnClick}>Delete</button>
        <ReviewInput
          store={this.props.store}
          restaurantId={id} />
      </li>
    );
  }
};

export default Restaurant;
