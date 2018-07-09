import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurant(state = {
    restaurants: [],
    reviews: [],
}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            
            return {
                ...state,
                restaurants: [
                    ...state.restaurants,
                    {
                        ...action.restaurant,
                        id: cuid(),
                    }
                ]
            }

        case 'DELETE_RESTAURANT':

            return {
                ...state,
                restaurants: [
                    ...state.restaurants.filter((restaurant) => {
                        return restaurant.id !== action.id
                    })
                ]
            }
    
        case 'ADD_REVIEW':

            const review = {
                restaurantId: action.restaurantId,
                text: action.text,
                id: cuid()
            };

            return {
                ...state,
                reviews: [
                    ...state.reviews,
                    review
                ]
            }

        case 'DELETE_REVIEW':
            
            return {
                ...state,
                reviews: [
                    ...state.reviews.filter(review => {
                        return review.id !== action.id;
                    })
                ]
            }
        default:
            return state;
    }
}