import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Cart extends Component {
  render() {
    const {products} = this.props
    console.log(this.props)
    let addedItems = products.length ? (
      products.map(item => {
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
                  <i className="material-icons">arrow_drop_up</i>
                </Link>
                <Link to="cart">
                  <i className="material-icons">arrow_drop_down</i>
                </Link>
              </div>
              <button className="waves-effect waves-light btn green remove">
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
      <div className="container">
        <div className="cart">
          <h5>You Have Ordered:</h5>
          <ul className="collection">{addedItems}</ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.addedItems
})

export default connect(mapStateToProps, null)(Cart)
