import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super();
    this.state = { text: '' }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: this.state
    })
    this.setState({ text: '' })
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text} />
          <button type="submit">Add restaurant</button>
        </form>
      </div>
    );
  }
}

export default RestaurantInput;
