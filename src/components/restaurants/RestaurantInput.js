import React, { Component } from 'react';
import { connect } from 'react-redux';



class RestaurantInput extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: '',
    }
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ''
    })
  };


  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" onChange={this.handleOnChange} value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};



export default RestaurantInput;
