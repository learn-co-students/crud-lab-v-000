import cuid from 'cuid';

export default function manageRestaurants(state = { restaurants: [] }, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
    
          const restaurant = {
            id: cuid(),
            text: action.text
          }
          return { restaurant: state.restaurants.concat(restaurant) };
    
        case 'DELETE_RESTAURANT':
            
          return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.payload)}
    
        default:
          return state;
    }
}
