import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        restaurantId: this.props.restaurantId,
        text: this.state.text
      }
    });

    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Add a review</label>
          <input
            type="text"
            value={this.state.text}
            onChange={(e) => this.handleChange(e)}
          />
          <input type="submit" />
        </form>
        <p><strong>Reviews</strong></p>
        <Reviews restaurantId={this.props.restaurantId} store={this.props.store}/>
      </div>
    );
  }
};

export default ReviewInput;
