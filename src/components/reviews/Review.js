import React, { Component } from 'react';

class Review extends Component {

  state = {
    isInEditMode: false
  }

  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    })
  }

  handleEdit = () => {
    this.setState({
      isInEditMode: false
    })
    this.props.updateReview(this.props.review.id, this.refs.textInput.value)
  }

  render() {
    const { review, deleteReview } = this.props

    return (
      <div>
        {this.state.isInEditMode ?
            <div>
              <input type="text" defaultValue={review.text}  ref="textInput" />
              <button onClick={this.handleEdit}>Update</button>
              <button onClick={this.changeEditMode}>Cancel</button>
            </div> :
            <div>
              {review.text}
              <button onClick={this.changeEditMode}>Edit</button>
            </div>
          }
        <button onClick={() => deleteReview(review.id)}> X </button>
      </div>
    );
  }

};

export default Review;
