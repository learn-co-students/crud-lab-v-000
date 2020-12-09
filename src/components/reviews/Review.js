import React, { Component } from 'react';
import EditReviewInput from './EditReviewInput';



class Review extends Component {
  state = initialState

  handleOnClick = () => {
    //debugger;
    this.props.deleteReview(this.props.review.id)
  }

  handleEdit = () => {
    //this.props.editRestaurant(this.props.reastaurant.id)
    this.setState({
      edit: "edit"
    });
  }

  render() {
    const { review } = this.props;

    return (
      <div>
        <li>
          {review.text}
        </li>

        <button onClick={this.handleEdit}> Edit Review</button>
        <button onClick={this.handleOnClick}> Delete Review </button>
        {this.state.edit === "edit" && <EditReviewInput review={review} editReview={this.props.editReview}/>}
      </div>
    );
  }

};

const initialState = {
  edit: ""
};


export default Review;
