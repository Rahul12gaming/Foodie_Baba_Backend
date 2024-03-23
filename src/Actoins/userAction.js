import axios from "axios";
import { LOGIN_USER_LOADING, LOGIN_USER_SUCCESS, LOGOUT_USER, REGISTER_USER_LOADING, REGISTER_USER_SUCCESS } from "../Constants/cartConstant";

export const RegisterUser=()=>async(dispatch)=>{
    dispatch({type:REGISTER_USER_LOADING});
    const {data}=await axios.post('https://foodie-baba-backend1.onrender.com/auth/signIn');
    localStorage.setItem("Token",JSON.stringify(data.Token));
    dispatch({
        type:REGISTER_USER_SUCCESS,
        payload:data.user
    })

}

export const LoginUser=(loginData)=>async(dispatch,getState)=>{
   try
   {
    dispatch({type:LOGIN_USER_LOADING});
    const {data}=await axios.post('https://foodie-baba-backend1.onrender.com/auth/login',loginData);
    dispatch({
        type:LOGIN_USER_SUCCESS,
        payload:data.user
    })
    sessionStorage.setItem("userData",JSON.stringify(getState().user.user))
    window.location.href='/'
    
   }
  
   catch(err)
   {
        alert(err.message)
   }
}
export const LogoutUser=()=>(dispatch)=>
{
    dispatch({
        type:LOGOUT_USER
    })
    sessionStorage.removeItem("userData");
    window.location.href='/'
}

