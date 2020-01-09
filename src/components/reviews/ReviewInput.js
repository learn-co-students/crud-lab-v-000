import React, { Component } from 'react';
class ReviewInput extends Component {

  state = {
    text: ""
  }

  onChange = event => {
    this.setState({
      text: event.target.value,
    });
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId });
    this.setState({
      text: '',
    });
  }

  render() {
    return (
     <div>
        <form onSubmit={this.onSubmit} >
          <label>Add Review</label>
          <input type="text" value={this.state.text} onChange={this.onChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
