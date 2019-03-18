import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
  	text: ""
  }

  handleChange = event => {
  	this.setState({
  		text: event.target.value
  	})
  }

  handleSubmit = event => {
  	event.preventDefault()
  	this.props.addRestaurant(this.state.text)
  	this.setState({
  		text: ''
  	})

  }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleSubmit}>
        	<label>Add restaurant name: </label>
        	<input 
				type="text"
				value={this.state.text}
				onChange={this.handleChange}
        	/>
        	<label> </label><button>SUBMIT</button>
        </form>
      </div>
    );
  }
};



export default RestaurantInput;
