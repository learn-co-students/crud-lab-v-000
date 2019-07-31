import React, { Component } from 'react';
import { connect } from 'react-redux';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
          <p>
            <label>Add Restaurant</label>
            <input type="text" onChange={this.handleOnChange} value={this.state.text} />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
