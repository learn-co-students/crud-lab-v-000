import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
import RestaurantUpdate from './RestaurantUpdate.js';

class Restaurant extends Component {

  constructor(props){
    super(props);
    this.state = {
      updateInput: false
    }
  }

  toggleUpdate = () => {
    this.setState({updateInput: false})
  }

  UpdateHandler = () => {
    return (this.state.updateInput ? <RestaurantUpdate toggleUpdate={this.toggleUpdate} update={this.props.update} restaurant={this.props.restaurant}/> : <button onClick={this.handleUpdateClick}>Update</button>)
    
  }
  

  handleUpdateClick = (event) => {
    event.preventDefault();
    this.setState({updateInput: true})
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.props.delete(restaurant.id)}> X </button>
          <this.UpdateHandler />
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
