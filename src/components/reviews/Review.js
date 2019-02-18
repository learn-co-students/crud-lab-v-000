import React, { Component } from "react";

class Review extends Component {
  state = {
    text: "",
    editMode: false
  };
  handleClick = () => {
    this.props.deleteReview(this.props.review.id);
  };

  // handleEditReview = e => {
  //   console.log(this.props);
  //   console.log(this.props.reviews);
  //   const review = this.props.reviews.map(x => x.id === e.target.dataset.id);
  //   console.log(review);
  //   console.log(review.text);
  //   this.setState({ editMode: true, text: review.text });
  // };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addReview({
      text: this.state.text,
      restaurantId: this.props.restaurantId
    });
    this.setState({ text: "" });
  };

  render() {
    const { review } = this.props;

    return (
      <div>
        <li>{review.text}</li>
        <button onClick={this.handleClick}> Delete Review </button>
        {/* //more */}
      </div>
    );
  }
}

export default Review;

//more
// <button onClick={this.handleEditReview} data-id={this.props.review.id}>
// {" "}
// Edit Review{" "}
// </button>
// {!!this.state.editMode ? (
// <div>
//   <form onSubmit={this.handleSubmit}>
//     <input
//       type="text"
//       id="editReview"
//       value={this.state.text}
//       onChange={this.handleChange}
//     />
//     <input type="submit" value="Submit this edit" />
//   </form>
// </div>
// ) : null}
