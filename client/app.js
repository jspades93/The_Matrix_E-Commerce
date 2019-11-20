import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import {Navbar} from './components'
import Routes from './routes'
import SingleProduct from './components/SingleProduct'
import Allproducts from './components/Allproducts'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes />
        <Route exact path="/" component={Allproducts} />
        <Route path="/products/:productId" component={SingleProduct} />
      </div>
    </BrowserRouter>
  )
}

export default App
