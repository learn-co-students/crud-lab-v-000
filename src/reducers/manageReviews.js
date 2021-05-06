import cuid from 'cuid';
export default function manageReviews(state=[], action) {
  console.log(`Called ${action.type} with`, action);
  switch (action.type) {
    case "ADD_REVIEW":
      return [...state, {text: action.review.text, id: cuid(), restaurantId: action.review.restaurantId}]
    case "DELETE_REVIEW":
      return state.filter(review=> review.id !== action.id)
    case "UPDATE_REVIEW":
      const review = {...state.find(r=> r.id === action.id)}
      review.text = action.text
      return [...state.filter(r=> r.id !== action.id), review]
    default:
      return state;
  }
}