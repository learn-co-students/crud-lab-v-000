
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] } , action) {

    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                text: action.text,
                id: cuid(),
                reviews: []
            }
            return {
                ...state,
                restaurants: [...state.restaurants, restaurant]
            }
        
        case 'UPDATE_RESTAURANT':
            const restaurants = state.restaurants.map(restaurant => {
                if (restaurant.id === action.restaurant.id) {
                    return {
                        ...restaurant,
                        text: action.restaurant.text
                    }
                }
                return restaurant
            })
            return {
                ...state,
                restaurants: restaurants
            }

        case 'DELETE_RESTAURANT':
            return {
                ...state,
                restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id),
                reviews: state.reviews.filter(review => review.restaurantsId !== action.id)
            }

        case 'ADD_REVIEW':
            const review = {
                text: action.review.text,
                id: cuid(),
                restaurantId: action.review.restaurantId
            }
            return {
                ...state,
                reviews: [...state.reviews, review]
            }

        case 'DELETE_REVIEW':
            return {
                ...state,
                reviews: state.reviews.filter(review => review.id !== action.id)
            }
        
        case 'UPDATE_REVIEW':
            const reviews = state.reviews.map(review => {
                if (review.id === action.review.id) {
                    return {
                        ...review,
                        text: action.review.text
                    }
                }
                return review
            })
            return {
                ...state,
                reviews: reviews
            }

        default:
            return state;
    }

}
