import React, { Component } from 'react';

class RestaurantInput extends Component {
  
  constructor(){
    super();
    this.state = {
      text: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    }, () => console.log(this.state.text))
  }

  handleSubmit = () => {
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      text: this.state.text,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}/>
          <button>Add Restaurant</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
