export const addRestaurant = text => {
    return { 
        type: 'ADD_RESTAURANT',
        text
    }
}

export const deleteRestaurant = restaurantID => {
    return {
        type: 'DELETE_RESTAURANT',
        restaurantID
    }
}