import cuid from 'cuid';


export default function manageRestaurant(state = [], action) {
  switch(action.type) {
    case "ADD_RESTAURANT":
      const restaurant = {
        id: cuid(),
        text: action.text
      }
      
      return [...state, restaurant];
    default:
      return state;
  }

}
