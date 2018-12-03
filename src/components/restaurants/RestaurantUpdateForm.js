import React, { Component } from 'react';

class RestaurantUpdateForm extends Component {
  constructor(props){
    super(props);
    this.state={
      text: this.props.restaurant.text
    }
  }
  

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.updateRestaurant({id: this.props.restaurant.id, text: this.state.text});
    this.props.handleClearingUpdateForm();
  }

  render() {
    return (
      <div>
        Update the Restaurant:
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" value="Update Restaurant"/>
        </form>
      </div>
    );
  }
};

export default RestaurantUpdateForm;