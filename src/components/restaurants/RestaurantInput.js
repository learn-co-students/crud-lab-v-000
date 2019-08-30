import React, { Component } from 'react';

class RestaurantInput extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      text: ""
    }
  
  }

  handleChange = (event) => {
    console.log("handleChange", event.target.value)
    this.setState({ text: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("hit handleSubmit Resturants", event.target, this.state)
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Add a restaurant to review</h3>
          <input type="text" onChange={this.handleChange} value={this.state.text} />
          <input type="submit" value="Add Restaurant"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
