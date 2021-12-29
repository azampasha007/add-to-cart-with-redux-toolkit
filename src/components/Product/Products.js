import { useSelector } from "react-redux"
import { getSelectedCategory } from "../../features/product/productsSlice"
import Product from "./Product"


const products = [
  {
    id:1,
    price:22,
    img:'garlic',
    name: 'Garlic-name',
    category:'vagetable'
  },
  {
    id:2,
    price:23,
    img:'lemon',
    name: 'Lemon-5Kg',
    category:'fruit'
  },
  {
    id:3,
    price:24,
    img:'garlic 2',
    name: 'Garlic-name',
    category:'vagetable'
  },
  {
    id:4,
    price:25,
    img:'lemon 2',
    name: 'Lemon-5Kg',
    category:'fruit'
  },
]

const Products = () => {
  const selectedCategory = useSelector(getSelectedCategory)
  return(
    <div className="productsContainer">
    {products.filter(product => {
      if (selectedCategory === 'all') return true;
      return selectedCategory === product.category
    }).map(product => <Product product={product}/>)}</div>
  )
}

export default Products