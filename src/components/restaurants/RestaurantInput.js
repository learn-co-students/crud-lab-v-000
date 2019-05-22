import React, { Component } from "react";

class RestaurantInput extends Component {

state = {
  text:'',
}

handleChange = (event) => {
  this.setState({
    text: event.target.value
  })
}

handleSubmit = (event) => {
  event.preventDefault();
  this.props.addRestaurant(this.state.text)
  this.setState({
    text: ''
  })
}

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Add Restaurant" onChange={this.handleChange} value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default RestaurantInput;
