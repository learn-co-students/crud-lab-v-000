import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageReviews(state = [], action) {
	switch (action.type) {
	    case 'ADD_REVIEW':
		  const review = {
	        id: cuid(),
	        text: action.text
	      }
	      return [ ...state, review ]

	    case 'DELETE_REVIEW':
	      return state.filter(review => review.id !== action.id);


	    default:
	      return state;
	}

}