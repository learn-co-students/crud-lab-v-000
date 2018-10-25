
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
    state = {
        restaurants: [],
        reviews: []
    }, action) {

    switch (action.type){
        case 'ADD_RESTAURANT':
            // console.log(state)
            const newRestaurant = {
                ...action.restaurant, id: cuid()
            }
            return { ...state, restaurants: [...state.restaurants, newRestaurant]}

        case 'ADD_REVIEW':
            const newReview = {
                ...action.review, id: cuid()
            }
            return {...state, reviews: [...state.reviews, newReview]}
        case 'REMOVE_REVIEW':

            return {...state, reviews: state.reviews.filter(review => review.id !== action.id)}
        case 'REMOVE_REVIEW':
            return{...state, restaurants: state.restaurants.filter(rest => rest.id !== action.id),
                    reviews: state.reviews.filter(review => review.restaurantId !== action.id)}
        default:
            return state;
    }

}
