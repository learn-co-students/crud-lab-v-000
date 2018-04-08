import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor () {
    super();
    this.state = {
      text: ''
    }
  }

  handleChange (event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      text: this.state.text
    });
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label htmlFor="addRestaurant">Add Restaurant: </label>
            <input id="addRestaurant" type="text" value={this.state.text} onChange={(event) => this.handleChange(event)}/>
          </p>
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
