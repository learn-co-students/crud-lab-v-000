import React, { Component } from "react";
import ReviewsContainer from "../../containers/ReviewsContainer";

class Restaurant extends Component {
  state = {
    text: "",
    editRestaurantMode: false
  };

  handleDeleteClick() {
    this.props.deleteRestaurant(this.props.restaurant.id);
  }

  handleEditClick = e => {
    const restaurant = this.props.restaurants.find(
      x => x.id === e.target.dataset.id
    );
    this.setState({ editRestaurantMode: true, text: restaurant.text });
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateRestaurant({
      text: this.state.text,
      id: this.props.restaurant.id
    });
    this.setState({ text: "", editRestaurantMode: false });
  };

  render() {
    const { restaurant } = this.props;
    return (
      <div>
        <li>
          {restaurant.text}
          <button type="button" onClick={e => this.handleDeleteClick()}>
            {" "}
            Delete Restaurant
          </button>
          {/* <button
            type="button"
            onClick={this.handleEditClick}
            data-id={restaurant.id}
          >
            {" "}
            Edit Restaurant{" "}
          </button> */}
          {this.state.editRestaurantMode ? (
            <div>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  id="editRestaurant"
                  value={this.state.text}
                  onChange={this.handleChange}
                />
                <input type="submit" value="Submit this edit" />
              </form>
            </div>
          ) : null}
          <ReviewsContainer
            reviews={this.props.reviews}
            restaurant={restaurant}
          />
        </li>
      </div>
    );
  }
}

export default Restaurant;
