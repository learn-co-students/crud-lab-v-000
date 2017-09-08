import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value,
    }, ()=>{console.log("new input text state " + this.state.text)})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text,
      }
    })
    this.setState({
      text: "",
    })
  }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.text} type="text" onChange={this.handleOnChange}/>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
