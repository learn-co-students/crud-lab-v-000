import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                text: action.text,
                id: cuid()
            }

            state = {
                ...state,
                restaurants: [
                    ...state.restaurants,
                    restaurant
                ]
            }

            return state

        case 'DELETE_RESTAURANT':
            state = {
                ...state,
                restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)
            }

            return state


        case 'ADD_REVIEW':
            const review = {
                text: action.review.text,
                restaurantId: action.review.restaurantId,
                id:cuid()
            }

            state = {
                ...state,
                reviews: [
                    ...state.reviews,
                    review
                ]
            }

            return state

        case 'DELETE_REVIEW':
            state = {
                ...state,
                reviews: state.reviews.filter(review => review.id !== action.id)
            }
            return state
        
        default:
            return state
    }
}
