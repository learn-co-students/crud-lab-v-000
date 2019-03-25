import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ""
  }

  handleKeyDown = (event) => {
    this.setState({
      text: event.target.value
    }, console.log(this.state.text))
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({text: ""})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Restaurant name" value={this.state.text} onChange={this.handleKeyDown}></input>
          <button tupe="submit">submit</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
