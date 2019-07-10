import React, { Component } from 'react';
import Restaurant from './Restaurant';
class Restaurants extends Component {
	render() {
		const restaurants =
			this.props.restaurants &&
			this.props.restaurants.map((restaurant) => {
				return (
					<li>
						<Restaurant deleteRestaurant={this.props.deleteRestaurant} restaurant={restaurant} />
					</li>
				);
			});
		return <ul>{restaurants}</ul>;
	}
}

export default Restaurants;
