import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: '',
  };

  handleChange(event) {
    this.setState({
        text: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Add Restaurant</label>
          <input type="text" onChange={(event) => this.handleChange(event)}/>
          <input type="submit" />
       </form>
      </div>
    );
  }
};

export default RestaurantInput;
