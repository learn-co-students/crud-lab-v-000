import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants( 
  state = {
    restaurants: [],
    reviews: []
  }, action) {
  
  switch ( action.type ) {
    case "ADD_RESTAURANT":
      const restaurant = { text: action.restaurant.text, id: cuidFn() };
      return { ...state, restaurants: [...state.restaurants, restaurant ]}
    default:
      return state
  }
}


// export default function manageRestaurants( 
//   state = {
//     restaurants: [],
//     reviews: []
//   }, action) {
  
//   switch ( action.type ) {
//     case "ADD_RESTAURANT":
//       debugger
//       console.log("hit the reducer")
//       return [...state].concat(action.restaurants)
//     case "DELETE_RESTAURANT":
//       return // code to delete restaurant
//     case "ADD_REVIEW":
//       return //code to add new review
//     case "DELETE_REVIEW":
//       return //delete review
//     default:
//       return state
//   }
// }