import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchProduct from "./SearchProduct";

const Products = () => {
  
  let [products, setProducts] = useState([]);
  let [filtered, setFilter] = useState([]);
  

  async function productsfetch() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      setProducts(data.products);
      console.log(products);

      setFilter(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  const handlefilter = (filterTerm) => {
    if (filterTerm === "drfault") {
      setFilter(products);
    } else {
      const filteredProduct = products.filter((p) =>
        p.category.includes(filterTerm)
      );
      setFilter(filteredProduct);
    }
  };

  useEffect(() => {
    productsfetch();
  }, []);

  const handlesearch=(searchterm)=>{
       const saerchProducts = products.filter((p)=>p.title.toLowerCase().includes(searchterm) || 
       p.category.toLowerCase().includes(searchterm) ||
       p.description.toLowerCase().includes(searchterm)
       )
       setFilter(saerchProducts);
  }

  return (
    <>
    <SearchProduct handlesearch={handlesearch}></SearchProduct> <br/>

      <select id="sort" onChange={(e) => handlefilter(e.target.value)}>
        <option value="default">Select</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="skincare">Skincare</option>
        <option value="groceries">Groceries</option>
      </select>
      <div>
        <h1>Products</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>Info</th>
              <th>Price</th>
            </tr>
          </thead>
          {filtered.length > 0
            ? filtered.map((pp) => (
                <tr>
                  <Link
                    to={`/products/${pp.id}`}
                  >
                    <td>{pp.id}</td>
                  </Link>
                  <td>{pp.title.toUpperCase()}</td>

                  <td>
                    {" "}
                    <img src={pp.images[0]} />
                  </td>

                  <td>{pp.description.toUpperCase()}</td>
                  <td>{pp.price}</td>
                </tr>
              ))
            : "...Loading"}
        </table>
      </div>
    </>
  );
};

export default Products;
