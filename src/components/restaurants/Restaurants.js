import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  handleDelete = (id) => {
    this.props.delete(id);
  };
  render() {
    return (
      <ul>
        {this.props.restaurants.map((r, idx) => (
          <Restaurant
            key={idx}
            restaurant={r}
            delete={(_) => this.handleDelete(r.id)}
          />
        ))}
      </ul>
    );
  }
}

export default Restaurants;
