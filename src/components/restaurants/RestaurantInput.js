import React, { Component } from 'react';

class RestaurantInput extends Component {

  state ={
    id: '',
    text: ''
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ''
    })
  }



  render() {
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <input type="text" onChange={event => this.handleOnChange(event)} value={this.state.text}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
