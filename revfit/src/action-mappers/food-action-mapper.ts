import { revfitRemoteGetAllFood } from '../remote/rev-food'

export const revfitFoodType = {
    SUCCESSFUL_FOOD: 'REVFIT_FOOD_SUCCESSFUL_FOOD',
    UNSUCCESSFUL_FOOD: 'REVFIT_FOOD_FAILED_FOOD'
}

export const revfitLogin = () => async (dispatch: any) => {
    try {
        let res = await revfitRemoteGetAllFood()
        // Succesful login
        if (res.status === 200) {
            dispatch({
                type: revfitFoodType.SUCCESSFUL_FOOD,
                payload: {
                    user: res.body
                }
            })
        } else {
            dispatch({
                type: revfitFoodType.UNSUCCESSFUL_FOOD
            })
        }
    } catch (e) {
        dispatch({
            type: revfitFoodType.UNSUCCESSFUL_FOOD
        })
    }
}