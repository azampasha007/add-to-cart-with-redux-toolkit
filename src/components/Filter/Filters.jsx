import Filter from "./Filter"


const Filters = () => {
  return(
    <div className="borderedContainer">Filters
    <b>Choose category: </b>
    {['fruit', 'vagetable', 'all']
      .map(category  => <Filter 
        category={category} 
        isActive={true}/>)}
    </div>
  )
}

export default Filters