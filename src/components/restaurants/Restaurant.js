import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {
  state = { text: '', isEditing: false }

  render() {
    const { restaurant } = this.props

    return (
      <div> 
        { !this.state.isEditing ? 
          <li>
            {restaurant.text}
            {/* <button onClick={this.onEditClick}>Edit Reurant</button> */}
            <button onClick={() => this.props.deleteRestaurant(restaurant.id)}>Delete</button>
            <ReviewsContainer restaurant={restaurant}/> <br/>
          </li>
          :
          <form onSubmit={this.onFormSubmit}>
            <input 
              type="text" 
              onChange={this.onInputChange}
              value={this.state.text}
              placeholder={this.props.restaurant.text}
            />
            <button>Submit</button>
          </form>
        }
      </div>
    )
  }

  onInputChange = (event) => {
    this.setState({ text: event.target.value })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.editRestaurant({ id: this.props.restaurant.id, text: this.state.text })
    this.setState({ 
        text: '', 
        isEditing: !this.state.isEditing  
    })
  }

  onEditClick = () => {
    this.setState(previousState => {
      return {
        isEditing: !previousState.isEditing
      } 
    })
  }

};

export default Restaurant;
