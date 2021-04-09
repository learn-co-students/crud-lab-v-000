import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    // setting our text to blank
    text: ''
  }

  onChange = (event) => {
    // update state of grabbed value of text
    this.setState({
      text: event.target.value
    })
  }
  
  onSubmit = (event) => {
    // handle submit event
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })

  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input name="text" type="text" value={this.state.text} onChange={this.onChange}></input>
          <input type="submit"/>
        </form>
        
      </div>
    );
  }
};

export default RestaurantInput;
