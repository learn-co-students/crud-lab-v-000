import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: "",
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.add(this.state.text)
    this.setState({
      text: "",
    })
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Add a Restaurant</h1>
          <input 
            onChange={this.handleChange} 
            type="text" 
            value={this.state.text}>
          </input>
          <input type="submit"></input>
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default RestaurantInput;
