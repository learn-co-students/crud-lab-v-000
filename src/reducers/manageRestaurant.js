import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []} , action) {
    debugger
    switch(action.type){
        case 'ADD_RESTAURANT':
            const new_restaurant = {text: action.text, id: cuidFn()}
            return Object.assign({}, state, { 
            restaurants: state.restaurants.concat(new_restaurant ),
      });
         case 'DELETE_RESTAURANT':
            const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
            return Object.assign({}, state, { restaurants })
        case 'ADD_REVIEW':
           const new_array = [...state.reviews]
           const review = { 
               text: action.review.text,
               id: cuidFn(),
               restaurantId: action.review.restaurantId
            }
          new_array.push(review)
        return Object.assign({}, state, {reviews: new_array})
        case 'DELETE_REVIEW':
          const reviews = state.reviews.filter(review=>review.id !== action.id )
          return Object.assign({}, state, {reviews})
        default:
         return state;
    }
}