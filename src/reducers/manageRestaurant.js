import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
    state = { restaurants: [], reviews: [] }, action) {
        
    switch(action.type) {
      case 'ADD_RESTAURANT':
        return {
          ...state,
          restaurants: [
            ...state.restaurants,
            { text: action.text, id: cuid() }
          ],
          reviews: [...state.reviews]
        };
  
      case 'DELETE_RESTAURANT':
        return {
          ...state,
          restaurants: state.restaurants.filter(rest => rest.id !== action.id),
          reviews: state.reviews.filter(review => review.restaurantId !== action.id)
        }
  
  
      case 'ADD_REVIEW':
        const { text, restaurantId } = action.review;
  
        return {
          ...state,
          restaurants: [...state.restaurants],
          reviews: [
            ...state.reviews,
            { text, restaurantId, id: cuid() }
          ]
        }
  
      case 'DELETE_REVIEW':
        return {
          ...state,
          restaurants: [...state.restaurants],
          reviews: state.reviews.filter(review => review.id !== action.id)
        }
  
      default:
        return state;
    }
}