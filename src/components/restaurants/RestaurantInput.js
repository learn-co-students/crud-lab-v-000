import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleOnSubmit(e)}>
          <label>Add Restaurant</label>
          <input type="text" onChange={e => this.handleOnChange(e)} value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
