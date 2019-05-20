import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  handleSubmit=(event) =>{
    event.preventDefault();
    this.props.addRestaurant(text);
    this.setState({
      text: ''
    });
  }

  handleChange =(event) =>{
    this.setState({
      text: event.target.value
    })
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
