import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: "",
    restaurantId: this.props.restaurantId
  }
  render() {
    return (
      <div>
        Review Input
        <form onSubmit={e=> {
          e.preventDefault();
          this.props.addReview(this.state);
          this.setState({text: ""})
          }}>
          <input type="text"
          value={this.state.text}
          onChange={e=> this.setState({text: e.target.value})} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
