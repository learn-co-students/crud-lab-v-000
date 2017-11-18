let id =0;

import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={
    restaurants: [],
    reviews: [],
}, action) {
    switch(action.type){
        case 'ADD_RESTAURANT':
          id = cuid();
          const restaurant = Object.assign({}, action.restaurant, {id: id});
          return {restaurants: state.restaurants.concat(restaurant)};
        
        case 'DELETE_RESTAURANT':
          const restaurants = state.restaurants.filter(r => r.id !== action.id);
          return { restaurants };
        
        case 'ADD_REVIEW':
          return {
            restaurants: state.restaurants,
            reviews: state.reviews.concat({
              text: action.review,
              id: cuid(),
              restaurantId: action.restaurantId,
            })};
        
        case 'DELETE_REVIEW':
          const reviews = state.reviews.filter(r => r.id !== action.id);
          return { 
              restaurants: state.restaurants,
              reviews: reviews,
           };
        
        default:
          return state;
    };
};