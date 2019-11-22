import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  };

  onChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={ (event) => this.onSubmit(event) }>
          <label>Add a Restaurant</label>
          <input
            type="text"
            value={ this.state.text }
            onChange={ (event) => this.onChange(event) }
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
