import { FOOD_DATA_BY_CATEGORY, FOOD_DATA_LOADING, FOOD_DATA_SUCCESS, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS, LOGOUT_USER, REGISTER_USER_LOADING, REGISTER_USER_SUCCESS } from "../Constants/cartConstant";

export const UserReducer=(state={user:[]},action)=>
{
    switch(action.type)
    {
     
        case REGISTER_USER_LOADING:
        case LOGIN_USER_LOADING:
            return {
                loading:true,
                isLogin:false
            }
        
            case REGISTER_USER_SUCCESS:
            case LOGIN_USER_SUCCESS:
                return {
                    loading:false,
                    user:action.payload,
                    isLogin:true
                }
            case LOGOUT_USER:
                return {
                    loading:false,
                    user:null,
                    isLogin:false
                }
        default:
            return state;
    }
}