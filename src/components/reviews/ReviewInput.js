import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
	constructor() {
		super();
		this.state = {
			text: ''
		};
	}

	handleChange = (e) => {
		this.setState({
			text: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.store.dispatch({type: "ADD_REVIEW", review: this.state, restaurantId: this.props.restaurantId})
	}

  render() {
    return (
      <div>
      	<br />
        <form onSubmit={this.handleSubmit}>
        	<label>Create Review</label><br />
        	<input type="text" onChange={this.handleChange} />
        	<input type= "submit" />
        </form>
        < Reviews restaurantId={this.props.restaurantId} store={this.props.store} />
      </div>
    );
  }
};

export default ReviewInput;
