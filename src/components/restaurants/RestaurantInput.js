import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const restaurantName = this.state.text;
    this.props.addRestaurant(restaurantName);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange}/>
          <input type="submit" value="add restaurant" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
