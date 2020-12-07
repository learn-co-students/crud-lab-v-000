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
    default:
      return state;
  }

}
