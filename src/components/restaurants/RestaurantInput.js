import React, { Component } from 'react';

class RestaurantInput extends Component {
	constructor() {
		super();
		this.state = {
			text: ''
		};
	}

	handleChange = (e) => {
		this.setState({
			text: e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.store.dispatch({type: 'ADD_RESTAURANT', restaurant: this.state});
		this.state = "";
	}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        	<input type="text" onChange={this.handleChange} value={this.state.text} />
        	<input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
