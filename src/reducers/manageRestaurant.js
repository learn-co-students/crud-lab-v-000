import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants( 
  state = {
    restaurants: [],
    reviews: []
  }, action) {
  
  switch ( action.type ) {
    case "ADD_RESTAURANT":
      return // code to add restaurant
    case "DELETE_RESTAURANT":
      return // code to delete restaurant
    case "ADD_REVIEW":
      return //code to add new review
    case "DELETE_REVIEW":
      return //delete review
    default:
      return state
  }
}