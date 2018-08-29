import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props){
    super(props);
    this.state={
      text: ''
    };
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ''
    })
  }

  handleChange = event => {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Create Restaurant</label>
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};


export default RestaurantInput;
