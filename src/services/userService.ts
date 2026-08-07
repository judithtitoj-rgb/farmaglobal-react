import type { UserResponse } from "../module/dummyJson"

export const getUsers = async (): Promise<UserResponse> => {

    const response = await fetch("https://dummyjson.com/users")

    if (!response.ok) {
        throw new Error("No se pudo obtener la información.")
    }

    return await response.json()
}