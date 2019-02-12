import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super()
    this.state={
      text: ''
    }
  }

  changeHandle = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  submitHandle = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text :''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandle}>
          <input type="text" onChange={this.changeHandle} value={this.state.text}/>
          <input type="submit" value="Add Restaurant"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
