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
