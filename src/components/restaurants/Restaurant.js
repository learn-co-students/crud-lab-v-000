import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {

  handleOnClick() {
    this.props.deleteRestaurant(this.props.restaurant.id);
  }

  render() {
    const { restaurant } = this.props;
    // console.log(this.props)

    return (
      <div>
            {console.log(this.props)}

        <li>
          {restaurant.text}
          <button onClick={() => this.handleOnClick()}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
