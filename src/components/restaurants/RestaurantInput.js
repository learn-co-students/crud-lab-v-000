import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text,
      },
    });
    this.setState({
      text: ''
    });
  }

  handleOnChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Restaurant Name</label>
          <input 
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
            <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
