import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props){
    super(props);
    this.state={text: ""}
  }

  enterText = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  submitForm = (event) => {
    event.preventDefault;
    this.props.store.dispatch({type: "ADD_RESTURANT", restaurant: this.state.text});
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input type="text" value={this.state.text} onChange={this.enterText}/>
      </form>
    );
  }
};

export default RestaurantInput;
