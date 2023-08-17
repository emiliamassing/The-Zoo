import { get } from "./serviceBase";
import { IAnimal } from "../models/IAnimal";

const BASEURL = import.meta.env.VITE_ANIMAL_API_URL;

export async function getAnimals() {
    const response = await get<IAnimal[]>(`${BASEURL}`);
    console.log(response);
    return response;
}