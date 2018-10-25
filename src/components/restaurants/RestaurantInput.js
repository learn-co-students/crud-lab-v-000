import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state);
    this.setState({text: ''})
  }

  handleChange =(event) => {
    this.setState({text: event.target.value})
  }

  render() {
    return (
      <div>
        <label>Add New Restaurant</label>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleChange} />
          <input type="submit"/>
        </form>

      </div>
    );
  }
};

export default RestaurantInput;
