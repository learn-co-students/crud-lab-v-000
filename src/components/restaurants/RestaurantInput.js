import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(){
    super();
    this.state = {
      text: ''
    }
  }

  handleChange=(event) =>{
    event.preventDefault();
    this.props.addRestaurant(text);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event)=>this.handleSubmit(event)}>
        <input type="text" onChange={(event)=>this.handleChange(event)} value={this.state.text}/>
        <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
