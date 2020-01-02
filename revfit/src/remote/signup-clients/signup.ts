import { UserClient } from "./signup-client";

export async function submitSignUp(username: string, password: string, weight: number, height: number, gender: string, goalWeight: number) {
    const fields = {
        username,
        password,
        weight,
        height,
        gender,
        goalWeight
    }
    try {
        let response = await UserClient.patch('/users', fields)
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