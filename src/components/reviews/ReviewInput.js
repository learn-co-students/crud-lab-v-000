import React, { Component } from 'react';


class ReviewInput extends Component {
  state= { text: ''};

  handleSubmit(event) {
    event.preventDefault();
    this.props.addReview({ text: this.state.text, restaurantId: this.props.restaurantId });
    this.setState({
      text:'',
    })
  }

  handleChange(event) {
    this.setState({
      text: event.target.value,
    })
  }
  render() {
    return (
      <div>
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>Review</label>
        <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
        <input type="submit" />
     </form>
      </div>
    );
  }
};
export default ReviewInput;
