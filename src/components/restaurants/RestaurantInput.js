import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.add(this.state.text);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <header><h3>Add a New Restaurant</h3></header>
        <form onSubmit={this.handleOnSubmit}>
          <p><label>Restaurant Name:</label></p>
          <input type="text" name="name" value={this.state.text} onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
