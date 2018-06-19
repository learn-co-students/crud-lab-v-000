import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor() {
    super();
    this.state = {
      text: ''
    }
  };

  handleOnChange(event) {
    this.setState({text: event.target.value})
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {text: this.state.text}
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <label>Restaurant Name</label>
        <input onChange={(event) => this.handleOnChange(event)} type='text'/>

        <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
