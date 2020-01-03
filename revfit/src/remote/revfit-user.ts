import { revfitUserClient } from "./revfit-client";

export async function revfitRemoteLogin(username: string, password: string) {
    const credentails = {
        username,
        password
    }
    try {
        const response = await revfitUserClient.post('/login', credentails)
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
