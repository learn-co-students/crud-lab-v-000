import React, { Component } from 'react';
//import Restaurant from './Restaurant'


class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

    handleSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.text, {review: this.props.review})
    this.setState({
      text: ''
    })
  }
//debugger
render() {
  return (
    <div>
      <form onSubmit={(event)=>this.handleSubmit(event)}>
        <input
          type="text"
          placeholder="Restaurant Name"
          value={this.state.text}
          onChange={(event) => this.handleChange(event)}></input>
        <input type="submit" />
      </form>
    </div>
  );
 }
};

export default RestaurantInput;
