import React, { Component } from 'react';
//import React, {  } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';
import EditRestaurantInput from './EditRestaurantInput'

class Restaurant extends Component {
  state = initialState


  handleOnClick = () => {
    this.props.deleteRestaurant(this.props.restaurant.id);
    this.props.deleteAssociatedReview(this.props.restaurant.id);


  }

  handleEdit = () => {
    //this.props.editRestaurant(this.props.reastaurant.id)
    this.setState({
      edit: "edit"
    });
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

const initialState = {
  edit: ""
};


export default Restaurant;
