import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor() {
    super();

    this.state = {
      text: '',
    }
  }

  handleKeyDown = (event) => {
    this.setState({
      text: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({type: 'ADD_RESTAURANT', text: this.state.text})
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input onChange={(event) => this.handleKeyDown(event)} value={this.state.text} />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
