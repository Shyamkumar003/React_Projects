import React, { useState } from 'react'

const SearchProduct = ({handlesearch}) => {
 
    let [searchProduct, setSearch] = useState([]);

    const handlechange=(e)=>{
        setSearch(e);

        handlesearch(searchProduct);
    }
  return (

    <div >
   Search : <input  id='search' type='text'  value={searchProduct} onChange={(e)=> handlechange(e.target.value)}/> 
    </div>

  )
}

export default SearchProduct