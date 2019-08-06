import React, { Component } from 'react';

class RestaurantInput extends Component {
  
  state = {
    text: ''
  }

  handleClick = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addRestaurants(this.state.text);
    this.setState({
      text: '',
    });
  }


  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.text} onChange={this.handleClick}/>
        <input type="submit"/>
      </form>
      </div>
    );
  }
};

export default RestaurantInput;
