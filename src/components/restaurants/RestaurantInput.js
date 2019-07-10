import React, { Component } from 'react';

class RestaurantInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}
	handleOnChange = (event) => {
		// Handle Updating Component State
		this.setState({
			// [event.target.name]
			text: event.target.value
		});
	};
	handleOnSubmit = (e) => {
		e.preventDefault();
		this.props.addRestaurant(this.state.text);
		this.setState({
			text: ''
		});
	};
	render() {
		return (
			<div>
				<form onSubmit={this.handleOnSubmit}>
					Restaurant Input
					<input type="text" name="text" value={this.state.text} onChange={this.handleOnChange} />
					<input type="Submit" value="Submit" name="Submit" />
				</form>
			</div>
		);
	}
}

// const mapDispatchToProps = (dispatch) => ({
// 	addRestaurant: (formData) => dispatch({ type: 'ADD_RESTAURANT', payload: formData })
// });
export default RestaurantInput;
// export default connect(null, mapDispatchToProps)(RestaurantInput);
