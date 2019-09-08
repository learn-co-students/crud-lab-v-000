import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" />
          <input type="submit" />
        </form>
        Restaurant Input
      </div>
    );
  }
};

export default RestaurantInput;
