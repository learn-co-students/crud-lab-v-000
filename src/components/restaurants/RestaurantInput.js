import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(){
    super();
    this.state = {text: ''};
  };

  handleChange = (event) => {
  	this.setState({text: event.target.value});
  };

  handleSubmit = (event) => {
  	event.preventDefault();
  	this.props.store.dispatch({
  		type: 'ADD_REST',
  		name: this.state.text
  	});
    this.setState({text: ''});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
            <label>Add restaurant: </label>
        	<input type="text" 
        	value={this.state.text}
        	onChange={this.handleChange} />
        	<input type="submit" name="add restaurant" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
