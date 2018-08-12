import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  handleOnChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
        type="text"
        onChange={(e) => this.handleOnChange(e)}
      value={this.state.text} />
        <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
