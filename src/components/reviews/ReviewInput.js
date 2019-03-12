import React, { Component } from 'react';

class ReviewInput extends Component {
  state = { text: '' }

  handleChange = (e) => {
    this.setState({ ...this.state, text: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add({...this.state, restaurantId: this.props.restaurantId});
    this.setState({text: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input type='text' value={ this.state.text } placeholder='write a review...' onChange={ this.handleChange }/>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
