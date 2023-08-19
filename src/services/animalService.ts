import { get } from "./serviceBase";
import { IAnimal } from "../models/IAnimal";

const BASEURL = import.meta.env.VITE_ANIMAL_API_URL;

export async function getAnimals() {
    const response = await get<IAnimal[]>(`${BASEURL}`);
    return response;
}

export async function getAnimalById(id: string) {
    const response = await get<IAnimal[]>(`${BASEURL}/${id}`);
    return response;
}