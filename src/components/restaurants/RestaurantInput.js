import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super()
    this.state = {
      text: ""
    }
  }

  handleChange(ev){
    this.setState({
      text: ev.target.value
    })
  }

  handleSubmit(ev) {
    ev.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: this.state
    })
  }

  render() {
    return (
      <form onSubmit={(ev) => this.handleSubmit(ev)}>
        <input
          type="text"
          onChange={(ev) => this.handleChange(ev)}
          value={this.state.text}
        />
        <input type="submit"/>
      </form>
    );
  }
};

export default RestaurantInput;
