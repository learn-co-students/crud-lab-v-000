import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
            <div>
                {restaurant.text}<button onClick={(ev)=>this.props.deleteRestaurant(restaurant.id)}> X </button>
          </div>
          Your Review:
          <ReviewsContainer restaurantId={restaurant.id}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
