import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  switch(action.type){
    case 'ADD_RESTAURANT':
      const restaurant = {id: cuid(), text: action.restaurant.text}
      //Keeping current state adding to restaurants array the new filled out restaurant obj
      return{...state, restaurants: [...state.restaurants, restaurant]}
    case 'DELETE_RESTAURANT':
      // Create a new array of band object that doesnt include the band we are deleting
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      // the new state
      return { restaurants };
    default:
      return state;
  }
}
