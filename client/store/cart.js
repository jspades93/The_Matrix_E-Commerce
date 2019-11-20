export const ADD_TO_CART = 'ADD_TO_CART'

export const addCart = item => ({type: ADD_TO_CART, item})

const initState = {
  addedItems: [],
  total: 0
}

export const cart = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return state
    default:
      return state
  }
}
