import {createSlice} from '@reduxjs/toolkit'

let initialState={
    cart:[],
    cartIndex:0
}
export const cartSlice = createSlice({
    name:"cartApi",
    initialState,
    reducers:{
        addCart:(state,action)=>{
            let cartItem = {
                cartID : state.cartIndex++,
                product:action.payload.product,
                quantity:action.payload.cartCount
            };
            state.cart.push(cartItem);
        },
        removeCart:(state,action)=>{
            state.cart = state.cart.filter((e)=> e.cartID!== action.payload.cartID)
        }
    }
})
export const {addCart,removeCart} = cartSlice.actions;
export default cartSlice.reducer;