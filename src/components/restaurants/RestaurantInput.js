import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(){
  	super()
  	this.state = {
  		text: ""
  	}
  }

  handleChange = (event) => {
  	this.setState({
  		text: event.target.value
  	})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({type: 'ADD_RESTAURANT', text: this.state.text})
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange}/>
        <input type="submit"/>
      </form>
      </div>
    );
  }
};

export default RestaurantInput;
