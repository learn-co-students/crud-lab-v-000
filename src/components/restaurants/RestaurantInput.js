import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props){
    super(props);

    this.state = {
      text: ""
    }
  }

  handleInputChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.store.dispatch({
      type: "ADD_RESTAURANT",
      restaurant: this.state
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)} > 
        <input onChange={(event) => this.handleInputChange(event)}  />
        <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
