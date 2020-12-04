import cuid from 'cuid';


export default function manageReviews(state = [], action) {
  switch(action.type) {
    case "ADD_REVIEW":
      const review = {
        id: cuid(),
        text: action.review.text,
        restaurantId: action.review.restaurantId
      }

      return [...state, review];
      case "DELETE_REVIEW":
      //debugger;
        return [...state.filter(review => review.id !== action.id)]
    default:
      return state;
  }
}
