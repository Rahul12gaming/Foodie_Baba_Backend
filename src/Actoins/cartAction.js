import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constants/cartConstant"

export const AddToCart=(item)=>(dispatch,getState)=>
{
   
    dispatch({
        type:ADD_TO_CART,payload:item
    })
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cart));
}

export const RemoveFromCart=(id)=>(dispatch,getState)=>
{
   
    dispatch({
        type:REMOVE_FROM_CART,payload:id
    })
    
}