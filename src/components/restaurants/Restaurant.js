import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';
import RestaurantEdit from './RestaurantEdit'

class Restaurant extends Component {
  
  state = {
    isEditing: false
  }

  toggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  render() {
    const { restaurant, deleteRestaurant, updateRestaurant } = this.props;

    if (this.state.isEditing === false) {
      return (
        <div>
            <li>
              <h2>
                {restaurant.text}     
                <button onClick={() => deleteRestaurant(restaurant.id)}> X </button>
                <a onClick={this.toggleEdit}><u>Edit</u></a>
              </h2>
              <ReviewsContainer restaurant={restaurant}/>
            </li>
            <hr></hr>
        </div>
      );
    }
    
    return (
      <RestaurantEdit toggleEdit={this.toggleEdit} restaurant={restaurant} updateRestaurant={updateRestaurant}/>
    )
  }
};

export default Restaurant;
