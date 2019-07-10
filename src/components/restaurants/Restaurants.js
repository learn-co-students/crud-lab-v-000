import React, { Component } from 'react';
import Restaurant from './Restaurant';
class Restaurants extends Component {
	render() {
		const restaurants =
			this.props.restaurants &&
			this.props.restaurants.map((restaurant) => {
				return (
					<Restaurant
						key={restaurant.id}
						deleteRestaurant={this.props.deleteRestaurant}
						restaurant={restaurant}
					/>
				);
			});
		return <ul>{restaurants}</ul>;
	}
}

export default Restaurants;
