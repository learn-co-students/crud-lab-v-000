import { connect } from 'react-redux';
import { addRestaurant } from '../../actions/restaurants';

import React, { Component } from 'react';

class RestaurantInput extends Component {

	state = {
    text: ''
  }

  handleOnChange(event) {
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
        Restaurant Input
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            name="input"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
