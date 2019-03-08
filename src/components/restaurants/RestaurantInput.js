import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
  	text: '' // the form field is initially blank, hence the empty string
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({ text: ''}) // clear the form after its submission
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Add a Restaurant:</label>
          <input type="text" value={this.state.text} onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

// When the user types the name of a restaurant into the form text field and hits the submit button,
// an action object of type 'ADD_RESTAURANT' is dispatched to update the state of the Redux store.
// Pass the addRestaurant action-dispatching arrow function as a prop to RestaurantInput component.
// Then, from within the handleOnSubmit callback function in RestaurantInput component,
// we can access the action-dispatching arrow function as this.props.addRestaurant,
// and invoke it, passing in the text of the restaurant name submitted in the form - this.state.text
// When the action-dispatching function is invoked by clicking the submit button,
// the dispatch function is called with the following action object as its argument:
// { type: 'ADD_RESTAURANT', text: 'Name of Restaurant Submitted in the Form Text Field' }
// We're dispatching an action object to the Redux store to create a new restaurant and 
// to update & persist changes to the Redux store state, so that the new restaurant is included in the collection