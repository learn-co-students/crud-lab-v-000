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
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Enter the name of the testaurant: </label>
          <input
            type="text"
            name="text" 
            id="name"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" value="Add"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
