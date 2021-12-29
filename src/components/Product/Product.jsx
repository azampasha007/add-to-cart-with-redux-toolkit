import { useState } from "react"
import QuantityButton from "./QuantityButton"
import { useDispatch } from "react-redux"
import { addItemToCart } from "../../features/cart/cartSlice"

const Product = ({product}) => {
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch();
  return(
    <div className="product">
    <div>
      <img className="img" src={`./${product.img}.jpg`} alt={product.name}/>
    </div>
    <div className="desContainer">
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    <QuantityButton 
      quantity={quantity}
      setQuantity={setQuantity}

    />
      <button onClick={() => {
        dispatch(addItemToCart({product, quantity}))
      }}>
      Add to cart</button>
    </div>
    </div>
  )
}

export default Product