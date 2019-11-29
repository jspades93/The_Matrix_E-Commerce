import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {
  getCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity
} from '../store/cart'
import Shipping from './Shipping'

class Cart extends Component {
  componentDidMount() {
    this.props.getCart(this.props.addedItems.cart.addedItems)
  }
  //NEED TO FIGURE OUT WHY MY CART IS SO DEEPLY NESTED???
  //might need to get rid of cart db and do an arr???
  render() {
    const {addedItems} = this.props
    let addedItemsList = addedItems.cart.addedItems.length ? (
      addedItems.cart.addedItems.map(item => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <div className="product-img">
              <img src={item.imageUrl} alt={item.imageUrl} className="" />
            </div>

            <div className="product-desc">
              <span className="title">{item.name}</span>
              {/* <p>{</p> */}
              <p>
                <b>Price: ${item.price}</b>
              </p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              <div className="add-remove">
                <Link to="cart">
                  <i
                    className="material-icons"
                    onClick={() => this.props.increaseQuantity(item)}
                  >
                    arrow_drop_up
                  </i>
                </Link>
                <Link to="cart">
                  <i
                    className="material-icons"
                    onClick={() => this.props.decreaseQuantity(item)}
                  >
                    arrow_drop_down
                  </i>
                </Link>
              </div>
              <button
                type="button"
                className="waves-effect waves-light btn green remove"
                onClick={() => this.props.removeItem(item)}
              >
                Remove
              </button>
            </div>
          </li>
        )
      })
    ) : (
      <p>Nothing To Show.....</p>
    )
    return (
      <div className="container white">
        <div className="cart">
          <h5>Shopping Cart:</h5>
          <ul className="collection">{addedItemsList}</ul>
          <div>
            <Shipping />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  addedItems: state
})

const mapDispatchToProps = dispatch => ({
  getCart: products => dispatch(getCart(products)),
  increaseQuantity: product => dispatch(increaseQuantity(product)),
  decreaseQuantity: product => dispatch(decreaseQuantity(product)),
  removeItem: id => dispatch(removeItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
