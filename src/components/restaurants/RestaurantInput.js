import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text,
      },
    });
    this.setState({
      text: '',
    });

  }

  render() {
    return (
      <div>

        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" onChange={(event) => this.handleChange(event)}>
          </input>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
