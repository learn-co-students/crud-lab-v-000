import React, { Component } from 'react';
import { connect } from 'react-redux';

class RestaurantInput extends Component {
  state = {
    name: ""
  }

  handleChange = (event) =>{
    this setState({
      [event.target.name]: event.target.value
    });
  }
 
  render() {
    return (
      <div>
        <form onChange={(event) => this.handleChange(event)}>
          <input type="text" name="name" value={this.state.name} />
          <input type="submit" />
        </form>
      </div>
    );
  }

};

export default connect()(RestaurantInput);

//our form should have two inputs: a text input to enter the name of the rest, and an input with type equal submit