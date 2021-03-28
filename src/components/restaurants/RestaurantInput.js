import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  onChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  onSubmit = (event) => {
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
          <input name="text" type="text" value={this.state.text} onChange={this.onChange}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
