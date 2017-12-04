import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ""
    }
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    debugger
    // this.props.store.dispatch()
  }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type='text' onChange={(event) => this.handleOnChange(event)} />
          <input type='submit' value="New Restaurant" />
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default RestaurantInput;
