import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
  	super();

  	this.state = {
  		text: ''
  	}
  }

  handleSubmit = (e)=> {
  	e.preventDefault();
  	this.props.store.dispatch({type: 'ADD_RESTAURANT', text: this.state.text})
  };

  handleChange = (e)=> {
  	this.setState({text: e.target.value})
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
		  <label htmlFor="name">Name</label>
		  <input type="text" onChange={this.handleChange} value={this.state.text} />
		  <button type="submit">submit</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
