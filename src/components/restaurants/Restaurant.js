import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  state={
    text: this.props.restaurant.text,
    isHidden: true
  }

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleUpdate = () => {
    const restaurant = {
      id: this.props.restaurant.id,
      text: this.state.text
    }
    this.toggleHidden()
    this.props.updateRestaurant(restaurant)
  }

  render() {
    const { restaurant } = this.props

    //should maybe turn these into individual components... meh

    const showRestaurant = <div>{restaurant.text} <button onClick={this.toggleHidden}>Edit</button> <button onClick={() => this.props.deleteRestaurant(restaurant.id)}> X </button></div>

    const editModal = <div><input value={this.state.text} onChange={this.handleChange} /> <button onClick={this.handleUpdate}>Edit</button></div>

    return (
        <li>
          {this.state.isHidden ? showRestaurant : editModal}
          <ReviewsContainer restaurant={restaurant} />
        </li>
    );
  }
};


export default Restaurant;
