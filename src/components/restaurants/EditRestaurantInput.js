import React, { Component } from 'react';
import Restaurant from './Restaurant';

class EditRestaurantInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
    text: this.props.restaurant.text

    };
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    let restaurant = {
      id: this.props.restaurant.id,
      text: this.state.text
    }
    this.props.editRestaurant(restaurant);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit ={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)}/>
          <input type="submit" />
        </form>

      </div>
    );
  }
};

export default EditRestaurantInput
