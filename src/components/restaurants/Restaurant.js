import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput' 
class Restaurant extends Component {
  handleClick(){
      this.props.store.dispatch({
      type: 'DELETE_RESTAURANT', 
      id: this.props.restaurant.id
    });
  }
  render() {

    return (
         <li key={this.props.restaurant.id}>{this.props.restaurant.text}
          <button onClick={this.handleClick.bind(this)}/>
          <ReviewInput restaurantId={this.props.restaurant.id} store={this.props.store}/>
         </li>
  
    );
  }
};

export default Restaurant;