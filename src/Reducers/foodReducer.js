import { FOOD_DATA_BY_CATEGORY, FOOD_DATA_LOADING, FOOD_DATA_SUCCESS } from "../Constants/cartConstant";

export const FoodReducer=(state={food:[]},action)=>
{
    switch(action.type)
    {
        case FOOD_DATA_LOADING:
            return {
                loading:true,
                food:[]
            }
        case FOOD_DATA_SUCCESS:
            return {
                looding:false,
                food:action.payload.food
            }
        case FOOD_DATA_BY_CATEGORY:
            return {
                loading:false,
                food:action.payload.food
            }
        default:
            return state;
    }
}