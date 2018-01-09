import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(){
    super();
    this.state = {
      text: ""
    };
  }
  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: this.state
    });
    this.setState({
      text: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Restaurant: </label>
        <input value={this.state.text} type="text" onChange={this.handleChange} />
        <input type="submit"/>
      </form>
    );
  }
};

export default RestaurantInput;
