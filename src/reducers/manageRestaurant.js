
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants:[], reviews:[],
}, action) {

  switch(action.type){
    case 'ADD_RESTAURANT':
    const restaurant = {
      id: cuidFn(),
      text: action.text
    }

    return{ ...state,
      restaurants: state.restaurants.concat(restaurant)
          }

    case 'DELETE_RESTAURANT':
    return{ ...state,
      restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)
    }

    case 'ADD_REVIEW':

    const review = {
      id: cuidFn(),
      text: action.review.text,
      restaurantId: action.review.restaurantId
    }
    console.log(action)
    return{ ...state,
      reviews: state.reviews.concat(review)
    }

    case 'DELETE_REVIEW':
    return{ ...state,
      reviews: state.reviews.filter(review => review.id !== action.review)
    }

    case 'UPDATE_REVIEW':
    console.log(action)
    return{ ...state,
      reviews: state.reviews.map(review => {
    if(review.id === action.updatedReview.id){
      return action.updatedReview
      }
      return review
      })
    }


    default:
      return state;
    }
}
