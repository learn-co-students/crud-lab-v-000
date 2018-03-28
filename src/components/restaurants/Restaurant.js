import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {

  handleOnClick(){
    this.props.store.dispatch({
      type: "DELETE_RESTAURANT",
      id: this.props.restaurant.id
    })

  }
  render() {
    const { text, id } = this.props.restaurant;

    return (
      <ul>
        <li>
        {text}
        <button onClick={ () => this.handleOnClick()}> X </button>
        <ReviewInput
        restaurantId={id}  
        store={this.props.store} />
        </li>
      </ul>
    );
  }
};

export default Restaurant;