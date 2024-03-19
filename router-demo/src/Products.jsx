import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchProduct from "./SearchProduct";
import { useDispatch } from "react-redux";
import { addCart } from "./cartSlice";

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
    if (filterTerm === "default") {
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

  const handlesearch = (searchterm) => {
    const saerchProducts = products.filter(
      (p) =>
        p.title.toLowerCase().includes(searchterm) ||
        p.category.toLowerCase().includes(searchterm) ||
        p.description.toLowerCase().includes(searchterm)
    );
    setFilter(saerchProducts);
  };

  let dispatch = useDispatch();

  return (
    <>
      <SearchProduct id="search" handlesearch={handlesearch}></SearchProduct>{" "}
      <br />
      <h3 class="sort">
        {" "}
        Select category:{" "}
        <select class="sort" onChange={(e) => handlefilter(e.target.value)}>
          <option value="default">Select</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
          <option value="skincare">Skincare</option>
          <option value="groceries">Groceries</option>
        </select>
      </h3>
      <div>
        <h1>Products</h1>
        <table id="table">
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
                  <Link to={`/products/${pp.id}`}>
                    <td>
                      <h2>{pp.id}</h2>
                    </td>
                  </Link>
                  <td>
                    <b>{pp.title.toUpperCase()}</b>
                  </td>

                  <td>
                    <img src={pp.images[0]} />
                  </td>

                  <td><b>{pp.description}</b></td>
                  <td><b>${pp.price}</b></td>
                </tr>
              ))
            : "...Loading"}
        
        </table>
      </div>
    </>
  );
};

export default Products;
