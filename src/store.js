import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { cartReducer } from "./Reducers/cartReducer";
import { FoodReducer } from "./Reducers/foodReducer";
import { UserReducer } from "./Reducers/userReducer";


const reducer=combineReducers({
    cart:cartReducer,
    food:FoodReducer,
    user:UserReducer
})
const middleware=[thunk]

const initialState={
    cart:{
        cart:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],
        },
    user:{
        user:sessionStorage.getItem("userData")?
        JSON.parse(sessionStorage.getItem("userData"))
        
        :null,loading:false,isLogin:false
        
        
    
    }
}
export const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))