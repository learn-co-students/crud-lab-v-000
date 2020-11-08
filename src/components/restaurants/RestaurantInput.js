import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props);
 
  this.state = {
    text: ''
  }
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
      text: ''
    });
  }

  render() {
    return (
      <div>
        Create a new restaurant:
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)}
            type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
