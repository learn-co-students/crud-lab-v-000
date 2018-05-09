import React, { Component } from 'react';

class ReviewInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  handleOnChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  handleOnSubmit(e) {
    // e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantID
      },
    });
    this.setState({
      text: '',
    });
    // this.refs.fieldText.value = "";
  }
  render() {
    return (
      <div>
        <form id="review" onSubmit={(e)=>this.handleOnSubmit(e)}>
          <p><input type="text" value={this.state.text} restaurantId={this.state.restaurantId} onChange={(e)=>this.handleOnChange(e)}/></p>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
