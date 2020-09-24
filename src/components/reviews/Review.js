import React, { Component } from 'react';
import ReviewEdit from './ReviewEdit'

class Review extends Component {
  state = {
    isEditing: false
  }

  toggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  render() {
    const { review, deleteReview, updateReview } = this.props;
    if (this.state.isEditing === false) {
      return (
        <div>
          <li>
            {review.text}
            <button onClick={() => deleteReview(review.id)}> X </button>
            <a onClick={this.toggleEdit}><u>Edit</u></a>
          </li>
        </div>
      );
    }

    return (
      <ReviewEdit toggleEdit={this.toggleEdit} review={review} updateReview={updateReview}/>
    )
  }

};

export default Review;
