import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text:''
  }

  onKeyDownHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmitHandler = (event)=> {
    event.preventDefault();
    this.props.addRest(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <input type="text" value={this.state.text} name="text" onChange={this.onKeyDownHandler} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};





export default RestaurantInput;
