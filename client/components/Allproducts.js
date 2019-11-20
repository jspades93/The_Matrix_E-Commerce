import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllProducts, addToCart} from '../store/products'

class Allproducts extends Component {
  componentDidMount() {
    this.props.getProducts()
  }
  handleClick(id) {
    this.props.addCart(id)
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
                this.handleClick(p.id)
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
  addCart: id => dispatch(addToCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Allproducts)
