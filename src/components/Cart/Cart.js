import CartItem from "./CartItem"
import { useSelector } from "react-redux"
import { getCartItems } from "../../features/cart/cartSlice"

const Cart = () => {
  const cartItemsFromState = useSelector(getCartItems)
  return(
    <div className="borderedContainer cartContainer">
    <h2 className="title">Cart</h2>
    <div className="cartTotalPriceContainer">
      <p>Total:</p>
      <span className="cartTotalPrice">$250</span>
    </div>
    {cartItemsFromState.map(cartItem => <CartItem cartItem={cartItem}/>)}
    </div>
  )
}

export default Cart