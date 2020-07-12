import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurant(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = {
        id: cuid(),
        text: action.text
      }
      return state = {
        restaurants: state.restaurants.concat(restaurant),
        reviews: state.reviews
    }

    case "UPDATE_RESTAURANT":
      console.log(action)
      return state = {
        restaurants: state.restaurants.map(restaurant => {
          if (restaurant.id === action.restaurant.id) {
            return action.restaurant            
          } else {
            return restaurant
          }
        }),
        reviews: state.reviews
    };

    case "DELETE_RESTAURANT":
      return state = {
        restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id),
        reviews: state.reviews
    }

    case "ADD_REVIEW":
      const review = {
        id: cuid(),
        restaurantId: action.review.restaurantId,
        text: action.review.text
      }
      return state = {
        restaurants: state.restaurants,
        reviews: state.reviews.concat(review)
    }

    case "UPDATE_REVIEW":
      console.log(action)
      return state = {
        restaurants: state.restaurants,
        reviews: state.reviews.map(review => {
          if (review.id === action.review.id) {
            return action.review            
          } else {
            return review
          }
        })
    };

    case "DELETE_REVIEW":
      return state = {
        restaurants: state.restaurants,
        reviews: state.reviews.filter(review => review.id !== action.id)
      }

    default:
      return state;
  }
};
