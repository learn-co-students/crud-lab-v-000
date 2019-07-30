
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: [],
}, action) {
   switch (action.type) {

     case 'ADD_RESTAURANT':
     const restaurant = {
       text: action.text,
       id: cuidFn()
     }
     return {
       ...state,
       restaurants: [...state.restaurants,  restaurant]
     }
     case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter((restaurant) => restaurant.id !== action.id)
      return {...state, restaurants}

      case 'ADD_REVIEWS':

      const reviews = {
        id: cuidFn(),
        text: action.text,
        restaurantId: action.id
      }
      return {...state, reviews}


  default:
       return state;
}
}
