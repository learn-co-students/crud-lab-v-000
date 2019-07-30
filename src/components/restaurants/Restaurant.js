import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  constructor(props) {
    super(props);


    // This binding is necessary to make `this` work in the callback
    this.handleOnClick = this.handleOnClick.bind(this);
  }


  handleOnClick = event => {
  
    event.preventDefault()
    this.props.deleteRestaurant(this.props.restaurant.id)
  }


  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={this.handleOnClick}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
