import { IFoodState } from ".";
import { Food } from "../models/food";
import { revfitFoodType } from "../action-mappers/food-action-mapper";

const initialState: IFoodState = {
    food: [new Food(0, '', 0, 0, 0, 0, 0)]
}

export const foodReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case revfitFoodType.SUCCESSFUL_FOOD: {
            return {
                ...state,
                food: action.payload.food
            }
        }
        default:
            return state
    }
}