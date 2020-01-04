import { revfitUserClient } from "./revfit-client";

export async function revfitRemoteGetAllFood() {
    try {
        const response = await revfitUserClient.get('/food')
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
