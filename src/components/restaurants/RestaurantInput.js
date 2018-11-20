import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleKeyDown(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addRes(this.state.text)
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Restaurant</label>
          <input type="text" onChange={(event) => this.handleKeyDown(event)} value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
