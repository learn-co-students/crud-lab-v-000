import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleKeyDown = event => {this.setState({text: event.target.value})}

  handleSubmit = event => {event.preventDefault(); this.props.store.dispatch({type: 'ADD_RESTAURANT', name: this.state.text}); this.setState({text: ''})}


  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.text} onChange={this.handleKeyDown} />
        <input type='submit' value='Submit' />
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default RestaurantInput;
