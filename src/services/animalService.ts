import { IAnimal } from "../models/IAnimal";
import { get } from "./serviceBase";

const BASEURL: string = import.meta.env.BASE_URL;

export const getAnimals = async () => {
    const response = await get<IAnimal>(`${BASEURL}`);
    return response.name;
}