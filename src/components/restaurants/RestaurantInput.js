import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.store.dispatch({ type: 'ADD_RESTAURANT', name: this.state.text })
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => {this.handleSubmit(event)}}>
        <label>Restaurant Name: </label>
        <input onChange={(event) => this.handleChange(event)} value={this.state.text} type='text' />
        <input type='submit' />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
