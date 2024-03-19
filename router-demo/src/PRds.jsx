
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "./cartSlice";
import { Link } from "react-router-dom";


const ProductID = () => {
  let [product, setProduct] = useState();
  const { productid } = useParams();

  let [cartCount , setCartCount] = useState(1);

  const getProduct = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/${productid}`
      );
      const data = await response.json();
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct(productid);
  }, []);

  const dispatch= useDispatch();

  return (
    <>
      <b>Products</b>
      <br></br>
      <br></br>
      {product &&
        <>
          <b>{product.title}</b> <br />
          
          <img src={product.images[0]} />

          <br />
          <b>{product.price}</b> <br />
          <b>{product.description}</b> <br />
          <b>{product.category}</b> <br />

          <br></br>
          <br></br>

          Quantity : <select onChange={(e)=>setCartCount(e.target.value)} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="7">7</option>
            <option value="10">10</option>
          </select>



            <button onClick={()=>dispatch(addCart({cartCount,product}))}>Add to Cart </button> <br></br> <br></br>

            <Link to='/products'><button>GO BACK</button></Link> 
          
        </>
      }
    </>
  );
};

export default ProductID;
