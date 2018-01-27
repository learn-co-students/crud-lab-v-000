import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    // Add text to restaurant state
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: { text: this.state.text }
    });
    // Clear out input field
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <h1>Restaurant Review</h1>
        <p>Enter Restaurant Name:</p>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <input type="text" value={this.state.text} onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
