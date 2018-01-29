import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super();
    this.state = {
      text:'',
    }
  }

  handleOnSubmit(event){
    this.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: this.state,
    });
  }

  handleKeyDown(event){
    this.setState({
      text: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            onKeyDown={this.handleKeyDown}/>
          <input
            type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
