import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  adddCartItem: () => {},
  deleteCartItem: () => {},
})

export default CartContext
