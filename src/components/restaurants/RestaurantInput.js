import React, { Component } from 'react';

class RestaurantInput extends Component {


  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        New Restaurant
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input onChange={this.handleChange} type="text" value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
