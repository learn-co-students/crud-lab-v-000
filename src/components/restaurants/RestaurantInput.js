import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    }
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text,
      },
    });
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <form onSubmit={(event)=>this.handleOnSubmit(event)}>
        Name of Restaurant: <input onChange={(event)=>this.handleOnChange(event)} type="text" />
        <input type="submit" />
      </form>
    );
  }
};

export default RestaurantInput;
