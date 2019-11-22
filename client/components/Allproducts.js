import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllProducts} from '../store/products'
import {addToCart} from '../store/cart'

class Allproducts extends Component {
  componentDidMount() {
    this.props.getProducts()
  }
  handleClick(p) {
    const {name, price, quantity, imageUrl} = p
    this.props.addCart(name, price, quantity, imageUrl)
  }
  render() {
    const {products} = this.props.products
    const productsList = products.map(p => (
      <div className="card" key={p.id}>
        <ul className="col s4">
          <div className="card-image">
            <img src={p.imageUrl} alt={p.name} />
            <span className="card-title">{p.name}</span>
            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light green"
              onClick={() => {
                this.handleClick(p)
              }}
            >
              <i className="material-icons">add</i>
            </span>
          </div>
          <div className="card-content">
            <p>
              <b>Price: ${p.price}</b>
            </p>
          </div>
        </ul>
      </div>
    ))

    return (
      <div className="container">
        <div className="row">
          <div className="dividers">{productsList}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getAllProducts()),
  addCart: (n, p, q, i) => dispatch(addToCart(n, p, q, i))
})

export default connect(mapStateToProps, mapDispatchToProps)(Allproducts)
