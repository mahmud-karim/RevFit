import { revfitRemoteLogin } from '../remote/revfit-user'

export const revfitLoginType = {
    INVALID_CREDENTIALS: 'REVFIT_LOGIN_INVALID_CREDENTIALS',
    SUCCESSFUL_LOGIN: 'REVFIT_LOGIN_SUCCESSFUL_LOGIN',
    UNSUCCESSFUL_LOGIN: 'REVFIT_LOGIN_FAILED_LOGIN'
}

export const revfitLogin = (username: string, password: string) => async (dispatch: any) => {
    try {
        let res = await revfitRemoteLogin(username, password)
        // Succesful login
        if (res.status === 200) {
            dispatch({
                type: revfitLoginType.SUCCESSFUL_LOGIN,
                payload: {
                    user: res.body
                }
            })
        } else {
            dispatch({
                type: revfitLoginType.INVALID_CREDENTIALS
            })
        }
    } catch (e) {
        dispatch({
            type: revfitLoginType.UNSUCCESSFUL_LOGIN
        })
    }
}