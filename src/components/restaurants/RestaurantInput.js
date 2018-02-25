import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
      super(props);
      this.state = {
        text: ""
      };
    }

    handleOnChange(event) { //changes state as you type
      this.setState({
        text: event.target.value,
      });
    }

    handleOnSubmit(event) { //dispatch state of text to action
      event.preventDefault();
      this.props.store.dispatch({
        type: 'ADD_RESTAURANT',
        restaurant: {
          text: this.state.text,
        },
      });
      this.setState({ //resetting component state
        text: '',
      });
    }

    render() {
      return (
        <div>
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <input type="text" onChange={(event) => this.handleOnChange(event)} value={this.state.text} />
            <input type="submit" />
          </form>
        </div>
      );
    }
};

export default RestaurantInput;