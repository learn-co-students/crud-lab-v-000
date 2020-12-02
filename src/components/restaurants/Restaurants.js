import React, { Component } from 'react';
import Restaurant from './Restaurant';


class Restaurants extends Component {



    return (
      <div>
        <ul>
          this.props.restaurants.map((restaurant, index) => <li key={index}>{restaurant.name}</li>);
        </ul>
      </div>
    );

};

export default Restaurants;
