import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ""
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="Add Restaurant" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
