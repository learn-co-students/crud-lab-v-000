import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

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
          Restaurant: {this.props.restaurant.text}
          <br />
          <button onClick={() => this.handleOnClick()} />
          <p />
          <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
