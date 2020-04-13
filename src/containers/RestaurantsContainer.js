import React, { Component } from "react";
import { connect } from "react-redux";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput add={this.props.add} />
        <Restaurants
          restaurants={this.props.restaurants}
          delete={this.props.delete}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ restaurants }) => ({ restaurants });
const mapDispatchToProps = {
  add: (restaurant) => ({ type: "ADD_RESTAURANT", restaurant }),
  delete: (id) => ({ type: "DELETE_RESTAURANT", id }),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsContainer);
