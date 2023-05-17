import React, { useContext } from 'react'
import Cart from './Cart'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } = useContext(CartContext)

  let total = getTotalPrice()
   const navigate = useNavigate()


  const clearCartWithAlert = ()=>{
  }

  return (
    <div>
        <Cart navigate={navigate} total={total} clearCartWithAlert={clearCartWithAlert} cart={cart}  deleteProductById={deleteProductById} />
    </div>
  )
}

export default CartContainer