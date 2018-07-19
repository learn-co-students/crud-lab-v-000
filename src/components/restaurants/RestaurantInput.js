import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super()

    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: this.state
    })
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input type='text' value={this.state.text} onChange={this.handleChange}/>
        <input type='submit'  />
      </form>
    );
  }
};

export default RestaurantInput;
