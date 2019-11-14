import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import Allproducts from './components/Allproducts'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Allproducts />
    </div>
  )
}

export default App
