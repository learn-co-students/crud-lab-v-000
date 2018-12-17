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
    
    console.log(this.state.text);
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <label>Add Restaurant</label>
          <input type="text" onChange={event => this.handleOnChange(event)} value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;