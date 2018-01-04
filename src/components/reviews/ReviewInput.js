import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleChange = (event) =>{
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: "ADD_REVIEW",
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId
      }
    });
    this.setState({
      text: ''
    })
  }

  render() {
    const reviews = this.props.store.getState().restaurants.find(restaurant => restaurant.id === this.props.restaurantId).reviews
    debugger
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.handleChange.bind(this)} />
          <input type="submit" />
        </form>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId} />
      </div>
    );
  }
};

export default ReviewInput;
