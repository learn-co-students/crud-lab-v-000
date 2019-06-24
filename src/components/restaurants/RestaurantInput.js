import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ""
  }

 handleOnChange = event =>{
  this.setState({
   text: event.target.value,
  })
};

 handleOnSubmit = event => {
   event.preventDefault();
   this.props.addRestaurant(this.state.text)
   this.setState({
     text: ""
   })
 }


  render() {
    return (
      <div>
      Enter Here
      <form onSubmit={this.handleOnSubmit}>
      <input
        placeholder="restaurant name"
        type="text"
        value={this.state.text}
        name="text"
        onChange={this.handleOnChange} />
        <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
