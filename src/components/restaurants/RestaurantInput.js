import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {text: this.state.text}
    });

    this.setState({
      text: '',
    })
  }

  render() {

    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input value={this.state.text} onChange={(event) => this.handleChange(event)} type="text" />
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default RestaurantInput;
