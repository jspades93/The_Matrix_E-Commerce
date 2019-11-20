import axios from 'axios'

// 'Constants>>>>>>>>>>>'
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS '
const SINGLE_PRODUCT = 'SINGLE_PRODUCT'

// 'Action>>>>>>>>>>>'
export const allProducts = products => ({type: GET_ALL_PRODUCTS, products})
export const singleProduct = product => ({type: SINGLE_PRODUCT, product})
// 'init-state>>>>>>>>>>>'
const initState = {
  products: [],
  selectedProduct: {}
}

// 'Reducer>>>>>>>>>>>'
export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {...state, products: action.products}
    case SINGLE_PRODUCT:
      return {...state, selectedProduct: action.product}
    default:
      return state
  }
}

// 'Thunk>>>>>>>>>>>>>>'
// export const getAllProducts = dispatch => {
//     axios.get('/api/products')
//     .then(data => dispatch(allProducts(data.data)))
//     .catch(console.error('Error getting all products'))
// }
export const getAllProducts = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/products')
    dispatch(allProducts(data))
  } catch (err) {
    console.error('Error getting all products', err)
  }
}
export const getSingleProduct = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/products/${id}`)
    dispatch(singleProduct(data))
  } catch (err) {
    console.error('Error getting single product', err)
  }
}
