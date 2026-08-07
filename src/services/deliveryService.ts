import type { Delivery } from "../module/dummyJson";

export async function getDeliveries(): Promise<Delivery[]> {
    const response = await fetch("../Json/delivery.json");

    if (!response.ok) {
        throw new Error("Error de Lectura del Json Delivery");
    }

    return response.json();
}