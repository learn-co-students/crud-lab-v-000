import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  state = {
    isInEditMode: false
  }

  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    })
  }

  handleEdit = () => {
    this.setState({
      isInEditMode: false
    })
    this.props.updateRestaurant(this.props.restaurant.id, this.refs.textInput.value)
  }

  render() {
    const { restaurant, deleteRestaurant } = this.props;

    return (
      <div>
        <li>
          {this.state.isInEditMode ?
            <div>
              <input type="text" defaultValue={restaurant.text}  ref="textInput" />
              <button onClick={this.handleEdit}>Update</button>
              <button onClick={this.changeEditMode}>Cancel</button>
            </div> :
            <div>
              {restaurant.text}
              <button onClick={this.changeEditMode}>Edit</button>
            </div>
          }
          <button onClick={() => deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer restaurantId={restaurant.id} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
