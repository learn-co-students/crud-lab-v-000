import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: '',
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {text: this.state.text}
    })
    this.setState({
      text: '',
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            value={this.state.text}
          />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
