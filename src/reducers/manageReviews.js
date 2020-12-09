import cuid from 'cuid';


export default function manageReviews(state = [], action) {
  //debugger;
  switch(action.type) {
    case "ADD_REVIEW":
      const review = {
        id: cuid(),
        text: action.review.text,
        restaurantId: action.review.restaurantId

      }
      //debugger;
      return [...state, review];
      case "DELETE_REVIEW":
      //debugger;
        return [...state.filter(review => review.id !== action.id)]
      case "DELETE_ASSOCIATED_REVIEW":

        return [...state.filter(review => review.restaurantId !== action.id)]

      case "EDIT_REVIEW":
          //debugger;
          let idx = state.findIndex(review => review.id === action.editedReview.id);
          let reviewToUpdate = state[idx];
          let updatedReview = {...reviewToUpdate, text: action.editedReview.text}
          return [...state.slice(0, idx), updatedReview, ...state.slice(idx + 1)];
    default:
      return state;
  }
}
