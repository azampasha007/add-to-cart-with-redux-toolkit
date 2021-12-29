import { useDispatch, useSelector } from "react-redux"
import { filterCategory, getSelectedCategory } from "../../features/product/productsSlice"

const Filter = ({category}) => {
  const dispatch = useDispatch()
  const selectedCategory = useSelector(getSelectedCategory)
  return(
    <span onClick={() => {
      dispatch(filterCategory(category))
    }} className={selectedCategory === category ? 'filterButton filterButtonActive' : 'filterButton'}>{category}</span>
  )
}

export default Filter