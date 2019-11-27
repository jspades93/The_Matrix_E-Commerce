import axios from 'axios'

const GET_ALL_CART = 'GET_ALL_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_ITEM = 'REMOVE_ITEM'

export const getCart = addedItems => ({type: GET_ALL_CART, addedItems})
export const addCart = item => ({type: ADD_TO_CART, item})
export const removeItem = item => ({type: REMOVE_ITEM, item})

const initState = {
  addedItems: [],
  total: 0
}

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_CART:
      console.log(action.addedItems)
      return {...state, addedItems: action.addedItems}
    case ADD_TO_CART:
      let addedItem = action.item
      let duplicate = state.addedItems.find(
        item => addedItem.name === item.name
      )

      if (duplicate) {
        addedItem.quantity += 1
        return {
          ...state,
          total: state.total + addedItem.price
        }
      } else {
        addedItem.quantity = 1
        let newTotal = state.total + addedItem.price

        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal
        }
      }
    case REMOVE_ITEM:
      return {
        ...state,
        addedItems: state.addedItems.filter(
          item => item.name !== action.item.name
        )
      }
    default:
      return state
  }
}

// export const getAllCartItems = () => async dispatch => {
//   try {
//     const {data} = await axios.get('/api/cart')
//     dispatch(getCart(data))
//   } catch (err) {
//     console.error('Error getting cart', err)
//   }
// }
// export const addToCart = (
//   name,
//   price,
//   quantity,
//   imageUrl
// ) => async dispatch => {
//   try {
//     const {data} = await axios.put('/api/cart', {
//       name,
//       price,
//       quantity,
//       imageUrl
//     })
//     dispatch(addCart(data))
//   } catch (err) {
//     console.error('Error adding to cart', err)
//   }
// }

// export const removeCartItem = id => async dispatch => {
//   try {
//     await axios.delete(`/api/cart/${id}`)
//     dispatch(removeItem(id))
//   } catch (err) {
//     console.log('Error removing Item', err)
//   }
// }
