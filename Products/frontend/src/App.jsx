import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Products from './pages/Products'
import Product from './pages/Product'
import Mycart from './pages/Mycart'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup/>} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/products/:pid' element={<Product/>}></Route>
          <Route path='/mycart' element={<Mycart/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
