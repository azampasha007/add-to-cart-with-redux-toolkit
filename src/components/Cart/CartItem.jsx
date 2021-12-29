

const CartItem = ({cartItem}) => {
  return(
    <div className="cartItem">
      <div className="cartItemDescContainer">
        <b className="m-0">Name: {cartItem.name}</b>
        <p className="m-0 p-0">Quantity: {cartItem.quantity}</p>
        <p>Price: {cartItem.price}</p>

      </div>
      <div className="cartItemRemoveButtonContainer">
        <span>
          icon
        </span>
      </div>
    </div>
  )
}

export default CartItem