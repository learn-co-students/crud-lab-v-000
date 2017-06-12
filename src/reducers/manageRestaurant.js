
import cuid from 'cuid';
export let cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [] }, action) {
    switch(action.type){
        case 'ADD_RESTAURANT':
            return {restaurants: state.restaurants.concat({
                ...action.restaurant,
                id: cuid(),
                reviews: [],
            }
                )};
        case 'DELETE_RESTAURANT':
            let restaurants = state.restaurants.filter( restaurant => restaurant.id !== action.id )
            return {restaurants: restaurants};
        case 'ADD_REVIEW':
            let review = action.review
            restaurants = state.restaurants;
            let index = restaurants.findIndex( restaurant => restaurant.id === action.restaurant.id);
            let restaurant = restaurants[index];
            debugger
            return { restaurants:
                    [restaurants.slice(0, index-1),
                    {...restaurant,
                        reviews: restaurant.reviews.concat(review)},
                    restaurants.slice(index+1)
                    ]
            };
        case 'DELETE_REVIEW':
            return state;
        default:
            return state;
    }
}