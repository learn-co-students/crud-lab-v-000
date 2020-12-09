import React, { Component, useState } from 'react';
//import React, {  } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';
import EditRestaurantInput from './EditRestaurantInput'

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: ""
    };
  }

  handleOnClick = () => {
    //debugger;
    this.props.deleteRestaurant(this.props.restaurant.id)
    this.props.deleteAssociatedReview(this.props.restaurant.id)
  }

  handleEdit = () => {
    //this.props.editRestaurant(this.props.reastaurant.id)
    this.setState({
      edit: "edit"
    })
  }


  render() {

    const { restaurant }  = this.props


    return (

      <div>
        <li>
          {restaurant.text}
          <button onClick={this.handleOnClick}> Delete </button>
          <button onClick={this.handleEdit}> Edit </button>
          {this.state.edit === "edit" && <EditRestaurantInput restaurant={restaurant} editRestaurant={this.props.editRestaurant}/>}
          <ReviewsContainer restaurant={restaurant}/>



        </li>
      </div>

    );
  }
};



export default Restaurant;
