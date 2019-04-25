import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ''
    })
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            value={ this.state.text }
            onChange={ this.handleOnChange }
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
