import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}
	handleOnChange = (event) => {
		this.setState({
			text: event.target.value
		});
	};
	handleOnSubmit = (event) => {
		event.preventDefault();

		debugger;
		this.props.addReview(event.target.text.value);
		this.setState({
			text: ''
		});
	};
	render() {
		return (
			<div>
				Review Input
				<form onSubmit={this.handleOnSubmit}>
					<input type="text" name="text" value={this.state.text} onChange={this.handleOnChange} />
					<input type="submit" value="Submit" name="submit" />
				</form>
			</div>
		);
	}
}

export default ReviewInput;
