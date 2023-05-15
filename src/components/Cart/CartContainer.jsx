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
    Swal.fire({
      title: 'Are you sure if you want to delete all of this?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes, Delete.',
      denyButtonText: `No, return.`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        Swal.fire('The cart has been cleaned.', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('The cart is the same as it was.', '', 'error')
      }
    })
  }

  return (
    <div>
        <Cart navigate={navigate} total={total} clearCartWithAlert={clearCartWithAlert} cart={cart}  deleteProductById={deleteProductById} />
    </div>
  )
}

export default CartContainer