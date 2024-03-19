import React, { useState } from 'react'

const SearchProduct = ({handlesearch}) => {
 
    let [searchProduct, setSearch] = useState([]);

    const handlechange=(e)=>{
        setSearch(e);

        handlesearch(searchProduct);
    }
  return (

    <div >
   <h3  class='searchTitle'> Search : <br></br><input   class='search' type='text'  value={searchProduct} onChange={(e)=> handlechange(e.target.value)}/></h3 >
    </div>

  )
}

export default SearchProduct