import cuid from 'cuid';
/*
export const cuidFn = cuid;
*/

export default function reviewReducer(state = [], action) {

  switch (action.type) {

    case 'ADD_REVIEW':
      return [...state, {
        id: cuid(),
        text: action.review.text,
        restaurantId: action.review.restaurantId
        }
      ]

    case 'DELETE_REVIEW':
      return state.filter( review => review.id !== action.id )

    case 'UPDATE_REVIEW':
      return state.map( review => review.id === action.review.id ? action.review : review)

    default:
      return state;

  }

}
