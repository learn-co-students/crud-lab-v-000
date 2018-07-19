import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  handleClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id,
    })
  }

  render() {
    return (
      <div>
        <li>
          {this.props.restaurant.text}
          &nbsp;<button onClick={this.handleClick}>X</button>
        </li>
        <ReviewInput store={this.props.store}/>
      </div>
    );
  }
};

export default Restaurant;
