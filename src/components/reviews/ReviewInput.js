import React, { Component } from 'react';

class ReviewInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      restaurantId: this.props.restaurantId,
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addReview(this.state);
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.text} onChange={this.handleChange} />
          <input type='submit' value='Add Review' />
        </form>

      </div>
    );
  }
};

export default ReviewInput;
