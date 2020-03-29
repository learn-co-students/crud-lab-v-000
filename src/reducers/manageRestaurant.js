
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
    state = {
        restaurants: [],
        reviews: []
    },
    action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            let newRestaurant = Object.assign({}, action.restaurant)
            newRestaurant.id = cuid()
            return {
                ...state,
                restaurants: state.restaurants.concat(newRestaurant)
            }

        case 'DELETE_RESTAURANT':
            console.log(action.restaurant)
            return {
                ...state,
                restaurants: state.restaurants.filter(rest => rest.id !== action.restaurantID)
            }

        case 'ADD_REVIEW':
            let newReview = Object.assign({}, action.review)
            newReview.id = cuid()
            return {
                ...state,
                reviews: state.reviews.concat(newReview)
            }

        case 'DELETE_REVIEW':
            console.log(action.reviewID)
            return {
                ...state,
                reviews: state.reviews.filter(review => review.id !== action.reviewID)
            }

        default:
            return state;
    }
}
