import axios from "axios";
import { FOOD_DATA_BY_CATEGORY, FOOD_DATA_LOADING, FOOD_DATA_SUCCESS } from "../Constants/cartConstant"

export const getFoodData=()=>async(dispatch)=>
{
    dispatch({type:FOOD_DATA_LOADING});
    const {data}=await axios.get("https://foodie-baba-backend1.onrender.com/food");
    console.log(data);
    dispatch({type:FOOD_DATA_SUCCESS,payload:data})
}

export const getFoodDataByCategory=(value)=>async(dispatch)=>
{
    dispatch({type:FOOD_DATA_LOADING});
    const {data}=await axios.get(`https://foodie-baba-backend1.onrender.com/food/category/${value}`);
    console.log(data);
    dispatch({type:FOOD_DATA_BY_CATEGORY,payload:data})
}