import cuid from 'cuid';

export default function mainReducer(state = {
    restaurants: [],
    reviews: []
}, action) {
    //console.log(state)
    console.log(action)
    switch(action.type) {
        case 'ADD_RESTAURANT':
            let restaurant = {
                id: cuid(),
                text: action.text
            }
            return {
                ...state,
                restaurants: [...state.restaurants, restaurant],
                reviews: [...state.reviews]
                
            }
        case 'DELETE_RESTAURANT':
            return {
                ...state,
                restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id),
                reviews: [...state.reviews]
            }
        case 'ADD_REVIEW':
            let existingRestaurant = state.restaurants.filter(
                restaurant => restaurant.id === action.review.restaurantId
            )
            if (existingRestaurant.length === 0) {
                return state;
            } else {
                let review = {
                    id: cuid(),
                    text: action.review.text,
                    restaurantId: action.review.restaurantId
                }
                //console.log(review)
                return {
                    ...state,
                    restaurant: [...state.restaurants],
                    reviews: [...state.reviews, review]
                }
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


};
