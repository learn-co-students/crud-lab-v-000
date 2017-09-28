import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({type: "ADD_REVIEW", restaurantId: this.props.restaurantId, text: this.state.text});
    this.setState({text: ''});
  }

  handleChange = e => {
    this.setState({text: e.target.value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.text} onChange={this.handleChange} />
          <input type="submit" value="submit" />
        </form>
        <Reviews restaurantId={this.props.restaurantId} store={this.props.store} />
      </div>
    );
  }
};

export default ReviewInput;
