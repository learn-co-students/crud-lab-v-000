import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state.text);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label>Restaurant Name: </label>
          <input type="text" name="text" value={ this.state.text } onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;