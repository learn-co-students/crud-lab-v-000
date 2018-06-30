import React, { Component } from 'react';

export default class RestaurantInput extends Component {
    state = {
    text: '',
    }
  handleChange = event => this.setState({ text: event.target.value })

  handleSubmit = event => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text,
      },
    })
    this.setState({ text: '' })
  }
  render() {
    return (
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Add Restaurant</label>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleChange(event)}/>
          <input type="submit" />
        </form>
    );
  }
};
