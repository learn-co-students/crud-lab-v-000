import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }

  render() {
    return (
      <li>
        <div>
          {this.props.restaurant.text}
          <button onClick={this.handleClick}>Delete</button><br />
          <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id} />
        </div>
      </li>
    );
  }
};

export default Restaurant;
