import React, { Component } from 'react';
// import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;
    // translates to const restaurant = this.props.restaurant

    const deleteRestaurant = () => {
      
      const deleteRestaurant = this.props.delete;

      return deleteRestaurant(restaurant.id)
    }

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => deleteRestaurant()}> X </button>
          {/* <ReviewsContainer restaurant={restaurant}/> */}
        </li>
      </div>
    );
  }
};

export default Restaurant;
