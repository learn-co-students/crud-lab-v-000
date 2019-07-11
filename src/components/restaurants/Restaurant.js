import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {
	handleClick(e) {
		e.preventDefault();
		this.props.deleteRestaurant(this.props.restaurant.id);
	}
	render() {
		const { restaurant } = this.props;

		return (
			<div>
				<li>
					{restaurant.text}
					<button onClick={(e) => this.handleClick(e)}> X </button>
					<ReviewsContainer restaurant={restaurant} />
				</li>
			</div>
		);
	}
}

export default Restaurant;
