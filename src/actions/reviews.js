export const addReview = text => {
  return {
    type: 'ADD_REVIEW',
	text
  }; //creates a copy of the object 
};

export const deleteReview = id => {
  return {
    type: 'DELETE_REVIEW',
    id
  };
};