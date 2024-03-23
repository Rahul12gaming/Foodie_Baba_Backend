import { AddToCart } from "../Actoins/cartAction";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constants/cartConstant";
import { Item } from "../component/Item";

export const cartReducer=(state={cart:[]},action)=>
{
    switch(action.type)
    {
        case ADD_TO_CART:
            const item=action.payload;
          
          
        const check=state.cart.find((data)=>data===action.payload)
        if(check)
        {
            return {
                ...state,
                cart:state.cart.map((data)=>(
                    data.id===item.id?(data):(item)
                ))
            }
        }
        else
        {
            return {
                cart:[
                    ...state.cart,action.payload
                ]
            }
        }

    case REMOVE_FROM_CART:
    
            return{
                ...state,
                cart:state.cart.filter((i)=>i._id!==action.payload)
            }
        default:
            return state;
    }

}