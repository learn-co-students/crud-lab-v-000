import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {
  handleDelete = () => { this.props.deleteRestaurant(this.props.restaurant.id) }

  render() {
    const { restaurant } = this.props;
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={this.handleDelete}> Delete Restaurant </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;

// Restaurant component is responsible for each restaurant (and contains the button to delete).
// Because reviews are associated to specific restaurants, the ReviewsContainer should be nested within
// the Restaurant component.
