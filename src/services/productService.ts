import productos from "../../Json/farmacosis.json"
import type{ Product } from "../Product"

export const getProducts = (): Product[] => {
    return productos as Product[]
}