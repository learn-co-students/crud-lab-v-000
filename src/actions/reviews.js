export const addReview = text => {
  return {
    type: 'ADD_REVIEW',
	text
  }; //creates a copy of the object 
};