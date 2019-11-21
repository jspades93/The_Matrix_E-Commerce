import axios from 'axios'

const GET_ALL_CART = 'GET_ALL_CART'
const ADD_TO_CART = 'ADD_TO_CART'

export const getCart = addedItems => ({type: GET_ALL_CART, addedItems})
export const addCart = item => ({type: ADD_TO_CART, item})

const initState = {
  addedItems: [],
  total: 0 //might have to include it in the DB
}

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_CART:
      return {...state, addedItems: action.addedItems}
    case ADD_TO_CART:
      // let addedItem = state.products.find(p => p.id === action.id)
      // let productInCart = state.addedItems.find(p => p.id === action.id)
      // if (productInCart) {
      //     addedItem.quantity += 1
      //     return {...state, total: state.total + addedItem.price}
      // } else {
      //     addedItem.quantity = 1
      //     return {
      //     ...state,
      //     addedItems: [...state.addedItems, addedItem],
      //     total: state.total + addedItem.price
      //     }
      // }
      return {...state, addedItems: [...state.addedItems, action.item]}
    default:
      return state
  }
}

export const getAllCartItems = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/cart')
    dispatch(getCart(data))
  } catch (err) {
    console.error('Error getting cart', err)
  }
}
export const addToCart = (
  name,
  price,
  quantity,
  imageUrl
) => async dispatch => {
  try {
    const {data} = await axios.post('/api/cart', {
      name,
      price,
      quantity,
      imageUrl
    })
    console.log('data>>>>>>', data)
    dispatch(addCart(data))
  } catch (err) {
    console.error('Error adding to cart', err)
  }
}
