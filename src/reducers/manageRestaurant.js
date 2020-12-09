import cuid from 'cuid';


export default function manageRestaurant(state = [], action) {
  switch(action.type) {
    case "ADD_RESTAURANT":
      const restaurant = {
        id: cuid(),
        text: action.text
      }

      return [...state, restaurant];


    case "DELETE_RESTAURANT":
    //debugger;
      return [...state.filter(restaurant => restaurant.id !== action.id)]

    case "EDIT_RESTAURANT":
      //debugger;
      let idx = state.findIndex(restaurant => restaurant.id === action.editedRestaurant.id);
      let restaurantToUpdate = state[idx];
      let updatedRestaurant = {...restaurantToUpdate, text: action.editedRestaurant.text}
      return [...state.slice(0, idx), updatedRestaurant, ...state.slice(idx + 1)];
    default:
      return state;
  }

}
