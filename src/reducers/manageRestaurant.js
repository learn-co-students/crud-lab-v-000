
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurant(state = {
    restaurants: [],
    reviews: []
}, action) {
    switch(action.type){
        case 'ADD_RESTAURANT':
            console.log(action.text)
            const restaurant = {
                id: cuidFn(),
                text: action.text
            }
            return {...state,
                restaurants: [...state.restaurants, restaurant]
            };
        case 'DELETE_RESTAURANT':
            return {...state,
                restaurants: state.restaurants.filter(restaurant =>
                restaurant.id !== action.id)
            }
        case 'ADD_REVIEW':
            const review = {
                id: cuidFn(),
                text: action.text,
                restaurantId: action.restaurantId
            }
            return {...state,
                reviews: [...state.reviews, review]
            };  
        case 'DELETE_REVIEW':
            console.log('delete: ' + action.id)
            return {...state,
                reviews: state.reviews.filter(review =>
                review.id !== action.id)
            }     
        default:
            return state;
    }
}