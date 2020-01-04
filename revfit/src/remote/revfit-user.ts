import { revfitUserClient } from "./revfit-client";

export async function revfitRemoteLogin(username: string, password: string) {
    try {
        const response = await revfitUserClient.post(`/user/login?username=${username}&password=${password}`)
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: undefined
            }
        }
    } catch (e) {
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}

export async function submitSignUp(userId: number, username: string, password: string, firstname: string, lastname: string, weight: number, height: number, gender: string, startingWeight: number, goalWeight: number) {
    const fields = {
        userId,
        username,
        password,
        firstname,
        lastname,
        weight,
        height,
        gender,
        startingWeight,
        goalWeight
    }
    try {
        let response = await revfitUserClient.post('/user', fields)
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: undefined
            }
        }
    } catch (e) {
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}
