
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants:[
    {
      id:cuid(),
      text: "Dog"
    },
    {
      id:cuid(),
      text: "Cow"
    },
    {
      id:cuid(),
      text: "Cat"
    }] }, action) {
  switch(action.type) {
    case "ADD_RESTAURANT":
    // console.log(action)
      const restaurant = {
        id: cuid(),
        text: action.restaurantName
      }

      return { restaurants: state.restaurants.concat(restaurant)}

    default:
      return state;
  }

}
