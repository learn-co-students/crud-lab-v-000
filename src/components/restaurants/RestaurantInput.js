import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    });
  }

handleOnSubmit = event => {
  event.preventDefault();
  this.props.addRestaurant(this.state.text)
  this.setState({
    text: ''
  })
}

  render() {
    return (
      <div>
        Enter a Restaurant name to be added to Yelp-like <br></br>
        <br></br>
        <form onSubmit={this.handleOnSubmit}>
          <input type='text' 
                 value= {this.state.text}
                 onChange={this.handleOnChange} />
                 <span> </span>
          <button type='submit'>Add Restaurant</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
