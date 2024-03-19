import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { removeCart } from "./cartSlice";

const Cart = () => {
  let data = useSelector((state) => state.cartApi.cart);

  let dispatch = useDispatch();

  return (
    <div>
      {/* {JSON.stringify(data)} */}

      {data && data.map((cartItem) => 

               <ul id="li">
                <b>cartId      :</b> <li>{cartItem.cartID}</li> <br></br>
                <b>Title       :</b> <li>{cartItem.product.title}  <br></br> <img src={cartItem.product.images[0]}/> </li> <br></br>
                <b>Description :</b> <li>{cartItem.product.description}</li> <br></br>
                <b>Price       :</b> <li>${cartItem.product.price}</li>
                <b>Quantity    :</b> <li>{cartItem.quantity}</li>
                <b>Total       :</b> <li>${cartItem.product.price * cartItem.quantity}</li><br></br>
                <button onClick={()=>dispatch(removeCart(cartItem))}><b>Remove</b></button>
               </ul>

              )}
    </div>
  );
};

export default Cart;
