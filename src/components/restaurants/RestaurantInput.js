import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(){
    super();

    this.state = {
      text: ''
    }
  }
  
  handleChange = function (event) {
      this.setState({
          text: event.target.value
      })
  }.bind(this);

  handleSubmit = function (event) {
      event.preventDefault();
      this.props.store.dispatch({type: 'ADD_RESTAURANT', restaurant: {text: this.state.text} });
      this.setState({
          text: ''
      })

  }.bind(this);

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
              <input type="text" onChange={this.handleChange} value={this.state.text}/>
              <input type="submit"/>
          </form>
      </div>
    );
  }
};

export default RestaurantInput;
