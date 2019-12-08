import { connect } from 'react-redux';
import { addRestaurant } from '../../actions/restaurants';

import React, { Component } from 'react';

class RestaurantInput extends Component {

	state = {
    text: ''
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: (newRestaurant) => {
      dispatch(addRestaurant(newRestaurant))
    }
  };
};

export default connect(null, mapDispatchToProps)(RestaurantInput);

