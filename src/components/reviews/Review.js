import React, { Component } from 'react';

class Review extends Component {
  state = {
    editMode: false
  }
  render() {
    const { review, actions } = this.props;
    if (!this.state.editMode) {
      return (
        <div>
          <li>
            {review.text}
          </li>
          <button onClick={_=> actions.deleteReview(review.id)}> X </button>
          <div onClick={_ => this.setState({ editMode: true })}>Edit</div>
        </div>
      );
    } else {
      return (
        <div>
          <li><form onSubmit={e=> 
            {e.preventDefault(); 
            actions.updateReview({text: e.target.text.value, id: review.id});
            this.setState({editMode: false})
            }}><input type="text" name="text"/></form></li>
        </div>
      )
    }
  }

};

export default Review;
