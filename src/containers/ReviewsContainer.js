import React, { Component } from "react";
import { connect } from "react-redux";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput
          restaurantId={this.props.restaurantId}
          add={this.props.add}
        />
        <Reviews reviews={this.props.reviews} delete={this.props.delete} />
      </div>
    );
  }
}

const mapStateToProps = ({ reviews }, { restaurant }) => ({
  reviews: reviews.filter((r) => r.restaurantId === restaurant.id),
  restaurantId: restaurant.id,
});

const mapDispatchToProps = {
  add: (review) => ({ type: "ADD_REVIEW", review }),
  delete: (id) => ({ type: "DELETE_REVIEW", id }),
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
